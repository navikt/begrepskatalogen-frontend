FROM navikt/node-express:latest
WORKDIR /app
COPY /server /app/
COPY /dist   /dist
ENV PORT=9090
EXPOSE 9090

