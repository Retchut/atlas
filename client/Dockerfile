FROM node:18-alpine3.15
WORKDIR /app/frontend
COPY src/ ./src
COPY public ./public
COPY package.json package-lock.json tailwind.config.js ./
COPY .envDebug ./.env
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]