FROM node:7.2.0-slim
 
# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service
 
# Bundle app source
COPY . /home/Service

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
 
EXPOSE 3000
CMD [ "npm", "start" ]