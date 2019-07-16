FROM node:alpine as builder

WORKDIR /app

COPY . .
ENV PARCEL_WORKERS=1

RUN yarn install
RUN yarn build

FROM navikt/node-express:latest

WORKDIR /app

COPY --from=builder /app/server /app
COPY --from=builder /app/dist   /dist
ENV PORT=9090
EXPOSE 9090

