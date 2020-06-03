FROM nginx:1.17.9-alpine

# RUN apk add curl

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY /dist/monitoring-client /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]