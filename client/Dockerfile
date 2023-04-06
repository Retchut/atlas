FROM node:18-alpine3.15
WORKDIR /app/frontend
COPY src/ ./src
COPY public ./public
COPY package.json package-lock.json tailwind.config.js .envDebug ./
RUN npm install
ENV PORT = 3000
EXPOSE 3000
CMD [ "npm", "start" ]