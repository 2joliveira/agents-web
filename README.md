# NLW Agents

Este aplicativo web permite o envio de áudios que são automaticamente transcritos, armazenados em um banco de dados e utilizados para responder perguntas dos usuários com base no conteúdo desses áudios. A aplicação foi desenvolvida durante o NLW Agents da Rocketseat, com foco em inteligência artificial generativa e agentes autônomos.

O sistema utiliza a API do Gemini AI, que interpreta a pergunta enviada pelo usuário, realiza buscas semânticas nos textos transcritos com auxílio de embeddings, e retorna respostas precisas baseadas nas informações dos áudios.


## 🚀 Tecnologias

- **React** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **TailwindCSS** - Framework CSS utility-first
- **React Router Dom** - Biblioteca de roteamento
- **TanStack React Query** - Gerenciamento de estado servidor e cache
- **Radix UI** - Componentes primitivos acessíveis
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de ícones

## 📂 Padrões de Projeto

- **Component-based Architecture** - Arquitetura baseada em componentes React
- **File-based Routing** - Roteamento baseado em arquivos com React Router
- **Server State Management** - Gerenciamento de estado servidor com React Query
- **Variant-based Components** - Componentes com variantes usando CVA
- **Composition Pattern** - Padrão de composição com Radix Slot
- **Path Aliasing** - Alias de caminhos (`@/` aponta para `src/`)

## ✅ Funcionalidades

### 🖥️ Front-end

- Interface para envio de áudios

- Visualização das salas e perguntas/respostas

- Envio de perguntas para a API

- Feedback visual durante upload e resposta

- Comunicação com a API para gerenciar salas, transcrições e respostas

### 🧠 Back-end
- Upload e armazenamento dos áudios

- Transcrição automática dos áudios

- Armazenamento das transcrições no banco de dados

- Organização dos dados por salas (rooms)

- Criação e listagem de perguntas

- Geração de respostas baseadas nas transcrições utilizando Gemini

- Busca semântica com embeddings

- Validação de dados com Zod

- Integração com Drizzle ORM para operações seguras no banco de dados

- Validação centralizada das variáveis de ambiente

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

### Backend

   O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.
 
