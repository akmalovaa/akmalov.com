FROM node:latest as builder

COPY . /src
WORKDIR /src

RUN npm install
RUN npm run build

FROM nginx:1.24.0-alpine
WORKDIR /srv/www/

COPY nginx.conf /etc/nginx/
COPY --from=builder /src/build .
RUN chown -R nginx:nginx /srv/www

EXPOSE 8000