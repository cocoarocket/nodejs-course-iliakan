var EventEmitter = require('events').EventEmitter;

// let db = new EventEmitter();

function Request(db) {
  var self = this;

  this.bigData = new Array(1e6).join('*');

  this.send = function (data) {
    console.log(data);
  }

  function onData(info) {
    self.send(info);
  }

  // this.end = function () {
  //  db.removeListener('data', onData);
  // }

  db.on('data', onData);
}

setInterval(function () {
  let db = new EventEmitter();
  var request = new Request(db);
  // request.end();
  console.log(process.memoryUsage().heapUsed);
  console.log(db);
}, 200);