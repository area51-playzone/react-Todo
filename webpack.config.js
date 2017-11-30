const path = require('path');
module.exports = {
  entry:"./client.js",
  output:{
    path: __dirname+"/deploy",
    filename:"app.js"
  }
};