FROM node:22-alpine AS base
WORKDIR /app

COPY . .
RUN corepack enable

CMD ["sh", "-c", "echo API image scaffold ready"]
