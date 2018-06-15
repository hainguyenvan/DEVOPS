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

## Config
* Create folder wordpress and copy source code wordpress to folder **wordpress**
* Create index logstash to elastic
```
In file logstash/conf/logstash.conf
index => "iris-%{+YYYY.MM.dd}"

In file logstash/conf/es_teamplate.conf
"template" : "iris-*",
```
* Config nginx connections to logstash
```
In file nginx/conf/nginx.conf
[logstash:5140] Url logstash
access_log syslog:server=logstash:5140,tag=nginx_access logstash;
error_log syslog:server=logstash:5140,tag=nginx_error notice;

In file logstash/conf/logstash.conf
[logstash] Url logstash
input {
  syslog {
    host => "logstash"
    port => 5140
  }
}    
```

## Run Docker
* Cd to folder monitoring-log
```
# docker-compose up
```
* Run `docker-compose up -d` (needs [Docker Compose](https://docs.docker.com/compose/) installed).
* Run `docker-compose up`

## Once running
* Go to your [http://0.0.0.0:8083](http://0.0.0.0:8090) and start configurate WordPress.
* PhpMyAdmin at [http://0.0.0.0:8084/](http://0.0.0.0:8080/).
* Elastichsearch [http://0.0.0.0:9200/](http://0.0.0.0:9200/).
* Kibana [http://0.0.0.0:5601/](http://0.0.0.0:5601/).

## Requirements
* [Docker Engine](https://docs.docker.com/installation/).
* [Docker Compose](https://docs.docker.com/compose/).
* [Docker Machine](https://docs.docker.com/machine/) (Mac and Windows only).

## Credit
* https://github.com/pabagan/dockerized-wordpress-nginx-php7-fpm-mysql
Tried to deal with persistent as [osteel's blog](http://tech.osteel.me/posts/2015/12/18/from-vagrant-to-docker-how-to-use-docker-for-local-web-development.html) friends tells to test benefits (looking forward to hear any opinions related).