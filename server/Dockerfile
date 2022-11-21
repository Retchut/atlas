FROM node:18-alpine3.15
WORKDIR /app/backend
COPY data/ ./data/
COPY models/ ./models/
COPY routes/ ./routes/
COPY scripts/ ./scripts/
COPY storage/ ./storage/
COPY .env package.json package-lock.json server.js ./
RUN npm install
ENV PORT = 9000
EXPOSE 9000
CMD [ "npm", "start" ]