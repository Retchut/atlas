echo 'Copying .envProd into .env'
cd server
cp .envProd .env
cd ..
cd client
cp .envProd .env
echo 'Building frontend application'
npm run build