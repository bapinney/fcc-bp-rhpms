var port = 8080;

var express = require('express');
var app = express();


app.get('/', function(req, res) 
{
    var ipaddress = req.connection.remoteAddress;
    var language = req.headers['accept-language'];
    var ip = req.connection.remoteAddress; //Note that this will return ::1, which is the IPv6 equivalent of 127.0.0.1
    var ua = req.headers['user-agent'];
    if (language.indexOf(',') !== -1)
    {
        language = language.substring(0, language.indexOf(','));
    }
    var resObj = {};
    resObj['ipaddress'] = ip;
    resObj['language'] = language;
    if (ua.indexOf('(') !== -1)
    {
        var os = ua.substring(ua.indexOf('(') + 1,ua.indexOf(')'));
    }
    else 
    {
        var os = ua;
    }
//    console.log(os);
    resObj['software'] = os;
    res.write(JSON.stringify(resObj));
    res.end();
});

app.listen(port, function(){
    console.log("Listening on port " + port);
}); 