import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { dayjs } from "@/lib/dayjs";
import { useRooms } from "@/http/use-rooms";

export function RoomList() {
  const { data, isLoading } = useRooms();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>

        <CardDescription>
          Acesso rápido para as salas criadas recentementes.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas...</p>
        )}
        {data?.map((room) => {
          return (
            <Link
              key={room.id}
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50 hover:cursor-pointer"
              to={`/rooms/${room.id}`}
            >
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {dayjs(room.createdAt).toNow()}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {room.questionsCount}{" "}
                    {room.questionsCount > 1 ? "perguntas" : "pergunta"}
                  </Badge>
                </div>
              </div>

              <span className="flex items-center gap-1 text-sm">
                Entrar <ArrowRight className="size-3" />
              </span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
