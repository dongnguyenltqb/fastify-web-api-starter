FROM node:alpine
RUN apk update && apk add --no-cache git

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm","run","$_PROJECT_ENV"]
