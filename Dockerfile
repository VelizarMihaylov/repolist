FROM node:lts-alpine

ARG REACT_APP_GRAPHQL_ACCESS_TOKEN
ARG NODE_ENV=development
ARG PORT=3000
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV REACT_APP_GRAPHQL_ACCESS_TOKEN=${REACT_APP_GRAPHQL_ACCESS_TOKEN}

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn*.lock ./
RUN yarn --production=false

COPY . .
RUN yarn build

EXPOSE ${PORT}

CMD [ "yarn", "run", "start" ]
