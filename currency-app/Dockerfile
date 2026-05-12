FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install axios

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
