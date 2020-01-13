# Build the Frontend

FROM node:alpine as frontend

WORKDIR /usr/app/frontend/
COPY frontend/package.json ./
RUN npm install -qy
COPY frontend/ ./
RUN npm run build

# Setup the server

FROM nginx

EXPOSE 80
WORKDIR /usr/app/
COPY --from=frontend /usr/app/frontend/build/ /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf