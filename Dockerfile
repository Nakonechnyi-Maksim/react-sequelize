FROM node:alpine as backend
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY /backend /app
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=backend /app /usr/backend
COPY /frontend/build/ /usr/share/nginx/html
COPY /frontend/build/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]