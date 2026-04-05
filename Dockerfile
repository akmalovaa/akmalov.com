FROM node:25.9.0-slim as builder

WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.29.7-alpine
WORKDIR /srv/www/

COPY nginx.conf /etc/nginx/
COPY --from=builder /src/build .
RUN chown -R nginx:nginx /srv/www

EXPOSE 8000