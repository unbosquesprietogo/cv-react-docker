FROM node:18.6 AS build

WORKDIR /app

COPY . /app

RUN npm install

RUN npm i -g serve

RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "dist"]

#WORKDIR /app
#
#COPY package*.json ./
#
#RUN npm install
#
#RUN npm install serve --save
#
#
#COPY . .
#
## Build the Vite project (output to /app/dist)
#RUN npm run build
#
#CMD ["serve", "-s", "dist"]

# Use Nginx as the base image for serving the application
#FROM nginx:latest

#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

#COPY ./nginx/ssl/prietogonzalez.tech_key.key /etc/nginx/
#COPY ./nginx/ssl/prietogonzalez.tech.pem /etc/nginx/

# Copy built artifacts from the build stage to the Nginx HTML directory
#COPY --from=build /app/dist /usr/share/nginx/html


#EXPOSE 80 443