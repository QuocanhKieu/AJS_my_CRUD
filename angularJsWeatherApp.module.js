var myApp = angular.module("angularJsWeatherApp", []);

myApp.controller("angularJsWeatherAppController", function ($http) {
  let vm = this;
  vm.city = "Ha Noi";
  // let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${vm.city}&appid=eafc23bd7ee6bed80ddde8a6f543c813`;
  vm.showWeather = false;
  vm.showError = false;
  // console.log(apiLink);
  let baseUrl = "https://ssl.gstatic.com/onebox/weather/128/";

  vm.date = new Date();

  vm.search = function () {
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${vm.city}&appid=eafc23bd7ee6bed80ddde8a6f543c813`;
    $http
      .get(apiLink)
      .then(function (response) {
        vm.showWeather = true;
        vm.showError = false;
        vm.date = new Date();

        let data = response.data;

        if (data.clouds.all < 20) {
          vm.imgAddress = baseUrl + "sunny.png";
        } else if (data.clouds.all < 90) {
          vm.imgAddress = baseUrl + "partly_cloudy.png";
        } else {
          vm.imgAddress = baseUrl + "cloudy.png";
        }
        vm.curTemp = data.main.temp;
        vm.minTemp = data.main.temp_min;
        vm.maxTemp = data.main.temp_max;
        vm.wind = data.wind.speed;
      })
      .catch(function (error) {
        vm.showWeather = false;

        vm.showError = true;
        // console.log("here");
        // return false;
      });
  };
});

myApp.filter("toC", function () {
  return function (input) {
    return input - 273.15;
  };
});
