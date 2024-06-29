# Stage 1: Build backend
FROM node:alpine as backend
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY backend/package.json backend/package-lock.json /app/
RUN npm install
COPY backend /app
# RUN npm run build
CMD ["node", "index.js"]

# Stage 2: Build frontend
FROM nginx:alpine as frontend
COPY frontend/build /usr/share/nginx/html
COPY frontend/build/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]