FROM node:18-alpine3.15
# setup express app files
WORKDIR /app/backend
COPY data/ ./data/
COPY models/ ./models/
COPY routes/ ./routes/
COPY scripts/ ./scripts/
COPY storage/ ./storage/
COPY package.json package-lock.json server.js ./
COPY .envDebug ./.env
# install express app dependencies
RUN npm install
ENV PORT = 9000
EXPOSE 9000
CMD [ "npm", "start" ]