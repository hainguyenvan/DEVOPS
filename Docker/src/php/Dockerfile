FROM ubuntu

RUN apt-get update -y && \
    apt-get install -y \
    php-fpm php-mysql

VOLUME ["/home/rombk/Project/tmp"]
WORKDIR /var/www/html
EXPOSE 9000