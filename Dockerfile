FROM grafana/k6:latest

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

CMD [ "run", "index.js" ]