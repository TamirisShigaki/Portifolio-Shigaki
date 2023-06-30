# Escolha a versão desejada do Node.js
FROM node:18-alpine

# Diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo package.json e o arquivo de bloqueio de versão (se existir)
COPY package.json pnpm-lock.yaml* ./

# Volumes (Host/Container) (faz o espelhamento, do docker pra pasta do projeto e vice/versa)
VOLUME /app

RUN npm install -g pnpm && pnpm config set store-dir /root/.local/share/pnpm/store/v3 --global && pnpm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta em que o aplicativo está rodando (se necessário)
EXPOSE 5173

# Comando para iniciar o aplicativo
CMD ["pnpm", "run", "dev"]