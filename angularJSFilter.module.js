var myApp = angular.module("angularJSFilter", []);

myApp.controller("filterController", function () {
  this.languages = [{ name: "cobol" }, { name: "pascal" }];
});

myApp.filter("toCap", function () {
  return function (input) {
    return input.toUpperCase();
  };
});
