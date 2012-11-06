var util = require('util'),
    colors = require('colors'),
    http = require('http'),
    httpProxy = require('http-proxy');

var addresses = {
  'default': {
    host: 'localhost',
    port: 5000
  }
};

httpProxy.createServer(function (req, res, proxy) {
  var target;

  target = (addresses[req.headers.host]) ? addresses[req.headers.host] : addresses.default;
  proxy.proxyRequest(req, res, target);
}).listen(80);

util.puts('http proxy server '.blue + 'started '.green.bold + 'on port '.blue + '80 '.yellow + 'with proxy table'.magenta.underline);
