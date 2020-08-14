## Frontend drupal spike
A simple, [gatsby react app](https://www.gatsbyjs.org/) used to fetch, manipulate 
and represent data fetched from a [drupal instance](https://www.drupal.org/).

![Overview image...](doc/Overview.png)

## Requirements
* Docker
* Docker compose
* Network connection

---
Before you can start, take sure you've made all the instructions from 
the [spike.drupal.backend](https://github.com/RaduBuciuceanu/spike.drupal.backend) 
repository.

## Setup
Run the following commands inside your terminal:
```
docker-compose build
docker-compose up
```

Done, your frontend should be accessible through the following url: 
* http://localhost:8000

## Teardown
Run the following command inside your terminal:
```
docker-compose down
```
