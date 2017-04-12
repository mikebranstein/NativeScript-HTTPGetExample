var observableModule = require("data/observable");
var httpModule = require("http");

var viewModel;

exports.onLoaded = function (args) {
    var page = args.object;
    viewModel = new observableModule.Observable({
        httpResponse: ""
    });
    
    page.bindingContext = viewModel;
};

exports.onGetTap = function (args) {
    console.log("GET button tapped");

    httpModule
        .request({ url: "https://httpbin.org/get", method: "GET" })
        .then(function (response) {
            // the HTTP response is converted to a string 
            // and set to the httpResponse property of the viewModel
            var str = response.content.toString();
            viewModel.set("httpResponse", str);
            console.log("HTTP Response: " + str);
        }, function (e) {
            // error
            console.log("HTTP Response Error: " + e)
        });

};