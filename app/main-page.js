var httpModule = require("http");

exports.onGetTap = function (args) {
    console.log("GET button tapped");

    httpModule
        .request({ url: "https://httpbin.org/get", method: "GET" })
        .then(function (response) {
            var str = response.content.toString();
            console.log("HTTP Response: " + str);
        }, function (e) {
            // error
            console.log("HTTP Response Error: " + e)
        });

};