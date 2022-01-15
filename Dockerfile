FROM node:14

RUN npm install -g \
    @angular/cli \
    @nestjs/cli

USER node
