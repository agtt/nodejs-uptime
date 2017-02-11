var http = require('http');
// Constructor
function Kare(url,timeout=1,port=80,interval=5) {
  // always initialize all instance properties
this.url = url
this.timeout = timeout
this.interval = interval
this.port = port
this.sayi=0 
 
}
// class methods 
Kare.prototype.check = function() {
	
var req = http.get({
  hostname: this.url,
  port: this.port,
  timeout:this.timeout,
  method: 'head',
 // path: '/',
  agent: false  // create a new agent just for this one request
}, (res) => {
 
});
req.end()  
req.on('response', (res) => {
   console.log(this.url+" -  "+res.statusCode)

  });
req.on('error', (res, socket, upgradeHead) => {
    //console.log(res.message)
  });
  
};

// export the class
module.exports = Kare;
