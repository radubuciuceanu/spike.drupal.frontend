FROM node:12.18.3-stretch

COPY . /srv/spike.drupal.frontend
WORKDIR /srv/spike.drupal.frontend

RUN yarn install

ENTRYPOINT ["yarn", "start"]
