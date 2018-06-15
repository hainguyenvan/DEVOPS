## Install Docker

* Run follows cmd
```
$ sudo apt-get update
$ sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
$ echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list
$ sudo apt-get update
$ apt-cache policy docker-engine
$ sudo apt-get install -y docker-engine
```
* Check version docker
```
$ docker -v
```
* Install docker compose
```
# curl -L https://github.com/docker/compose/releases/download/1.6.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
# chmod +x /usr/local/bin/docker-compose
```
* Check version docker compose
```
$ docker-compose -v
```

## CMD

* List composes
```
# docker-compose ps
```
* Stop composes
```
# docker-comopse stop NAME_COMPOSE
```