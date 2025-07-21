import { Button } from "@/components/ui/button";
import { Mic, Pause, Square } from "lucide-react";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function";

type RecordRoomParams = { roomId: string };

export function RecordRoomAudio() {
  const { roomId } = useParams<RecordRoomParams>();

  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);

  function stopRecording() {
    setIsRecording(false);
    if (recorder.current && recorder.current.state !== "inactive") {
      recorder.current.stop();
    }
  }

  async function uploadRecording(audio: Blob) {
    const formData = new FormData();
    formData.append("file", audio, "audio.webm");

    await fetch(`http://localhost:3333/rooms/${roomId}/audio`, {
      method: "POST",
      body: formData,
    });
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert("Seu navegador não tem suporte a gravação de áudio.");
      return;
    }
    setIsRecording(true);

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    recorder.current = new MediaRecorder(stream, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    });

    recorder.current.ondataavailable = (e) =>
      e.data.size && uploadRecording(e.data);
    recorder.current.start();
  }

  if (!roomId) return <Navigate replace to="/" />;

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-10">
      {isRecording ? (
        <Button
          onClick={stopRecording}
          className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-red-700"
        >
          <Pause className="size-5" />
          Pausar gravação
        </Button>
      ) : (
        <Button
          onClick={startRecording}
          className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-700"
        >
          <Mic className="size-5" />
          Gravar áudio
        </Button>
      )}

      <div className="flex items-center gap-2">
        {isRecording ? (
          <>
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-red-600" />
            </span>
            <p className="text-sm font-medium text-red-600">Gravando...</p>
          </>
        ) : (
          <>
            <Square className="size-4 text-gray-400" />
            <p className="text-sm text-gray-500">Pausado</p>
          </>
        )}
      </div>
    </section>
  );
}
