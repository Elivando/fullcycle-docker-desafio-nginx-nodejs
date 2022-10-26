FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# RUN mkdir /usr/src/app -p && touch /usr/src/app/index.js

# ENTRYPOINT [ "/docker-entrypoint.sh" ]
# CMD [ "nginx", "-g", "daemon off;" ]