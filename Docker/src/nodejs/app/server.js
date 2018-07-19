'use strict';

const express = require('express');
const md5 = require('md5');
var sha1 = require('sha1');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	var hash = md5("my message11111");
	var hash1 = sha1("my message11111");
  	res.send('Hi hash: '+ hash +'1 : '+ hash1+'\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);