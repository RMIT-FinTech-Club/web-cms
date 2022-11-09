# path: ./Dockerfile

FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
WORKDIR /app/
COPY ./package.json ./yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn install
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "start"]

