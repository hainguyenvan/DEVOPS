## Install
* Clone images
```
$ git clone https://github.com/oracle/docker-images.git
```

* Dowload file oracle zip and move folder 19.3.0
```
https://www.oracle.com/database/technologies/oracle-database-software-downloads.html
```

* cd to folder docker-images
```
$ cd $ROOT/docker-images/OracleDatabase/SingleInstance/dockerfiles
```

* Build docker images
```
# ./buildDockerImage.sh -v 19.3.0 -e
```

* Create foler and set permission
```
$ mkdir $ROOT/db
$ chmod a+w $ROOT/db
```

* Run container
```
# docker run --name oracle-ee -p 1521:1521 -v /home/oracle/oradata:/opt/oracle/oradata oracle/database:12.2.0.1-ee
```


## Refs
* https://github.com/oracle/docker-images/blob/master/OracleDatabase/SingleInstance/README.md
* https://medium.com/oracledevs/creating-an-oracle-database-docker-image-f3cea1ea21bb