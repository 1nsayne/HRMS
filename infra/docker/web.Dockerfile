FROM node:22-alpine AS base
WORKDIR /app

COPY apps/web/package*.json ./apps/web/
RUN cd apps/web && npm ci

COPY apps/web ./apps/web
RUN cd apps/web && npm run build

CMD ["sh", "-c", "echo Web image scaffold ready"]
