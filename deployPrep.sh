echo 'Copying production enviromentf files into the respective .env files'
cp client/.envProd client/.env
cp server/.envProd server/.env
echo 'Building frontend application'
cd client && npm run build
cd build/ && flyctl launch
echo 'Building backend application'
cd server && flyctl launch --dockerfile Dockerfile-prod