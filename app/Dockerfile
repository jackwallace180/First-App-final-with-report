
FROM node:10

RUN apt-get update -y
RUN apt-get upgrade -y

WORKDIR /app

RUN npm install
RUN npm intall pug -g

EXPOSE 3000

CMD [ "npm", "run", "watch" ]

