### Run example demo monitoring
* Run system monitoring
```
# cd monitoring
# docker-compose up
```
* Run examople
```
# cd monitoring-example
# docker-compose up
```
* Open web
```
Elastic: http://ip:9200/logstash101-*/_search/?size=10&pretty=1
Kibana: http://192.168.1.54:5601
```