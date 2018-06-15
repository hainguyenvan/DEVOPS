# WordPress with nginx, php7-fpm, MySQL and PhpMyAdmin
Built using Oficial images:
* [Nginx](https://hub.docker.com/_/nginx/).
* [PHP](https://hub.docker.com/_/php/) altered to install `docker-php-ext-install pdo pdo_mysql mysqli` (check `/php` folder).
* [MySQL](https://hub.docker.com/_/mysql/).
* [PHPMyAdmin](https://hub.docker.com/r/phpmyadmin/phpmyadmin/).

## Environment variables
* File `.env` set environment variables.

```bash
# APP Name
APP=appname

# mysql
MYSQL_HOST=mysql
MYSQL_ROOT_PASSWORD=pwd
MYSQL_DATABASE=db
MYSQL_USER=user
MYSQL_PASSWORD=secret
```

## Get WordPress
Download [WordPress](https://wordpress.org/download/) into the main folder. Can change name and update `PERSISTENT_APP` value.

## Run Docker
* Run `docker-compose up -d` (needs [Docker Compose](https://docs.docker.com/compose/) installed).
* Run `docker-compose up`

## Once running
* Go to your [http://0.0.0.0:8090](http://0.0.0.0:8090) and start configurate WordPress.
* PhpMyAdmin at [http://0.0.0.0:8080/](http://0.0.0.0:8080/).

## Requirements
* [Docker Engine](https://docs.docker.com/installation/).
* [Docker Compose](https://docs.docker.com/compose/).
* [Docker Machine](https://docs.docker.com/machine/) (Mac and Windows only).

## Credit
* https://github.com/pabagan/dockerized-wordpress-nginx-php7-fpm-mysql
Tried to deal with persistent as [osteel's blog](http://tech.osteel.me/posts/2015/12/18/from-vagrant-to-docker-how-to-use-docker-for-local-web-development.html) friends tells to test benefits (looking forward to hear any opinions related).