var Kare = require('./library/kare.js')
var mysql      = require('mysql');
var async      = require('async');

  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pass',
  database : 'database'
});

connection.connect();
 
connection.query('select * from test  ', function (error, results, fields) {
  if (error) throw error;
	 var i = 0;
   async.map(results, function(url, callback) {
	 var id = results[i].id
	 var link = results[i].url
	 var test = new Kare(link)
	 test.check() 

	i++;
    }, function(err, results) {
 //Error bölümü
    });
	//console.log("finish")
	}

);
connection.end();
