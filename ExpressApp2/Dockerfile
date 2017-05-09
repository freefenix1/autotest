FROM node:7.2.0-slim
 
# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service
 
# Bundle app source
COPY . /home/Service

RUN npm --registry https://registry.npm.taobao.org info underscore
RUN npm install -g --registry=http://registry.npm.taobao.org
#RUN npm install -g cnpm --registry=http://registry.npm.taobao.org 
 
EXPOSE 3000
CMD [ "npm", "start" ]