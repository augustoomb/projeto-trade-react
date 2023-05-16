FROM node:18.13-alpine
WORKDIR /projeto-trade-react
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]
