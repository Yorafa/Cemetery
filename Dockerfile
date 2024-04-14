FROM node:21.2.0 AS build
WORKDIR /app
COPY . ./
RUN npm install
FROM gcr.io/distroless/nodejs
COPY --from=build /app /
EXPOSE 3000
CMD ["index.js"]