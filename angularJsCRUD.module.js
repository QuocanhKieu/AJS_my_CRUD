var myApp = angular.module("angularJsCRUD", []);

myApp.controller("angularJsCRUDController", function () {
  let ctrl = this;
  ctrl.users = {
    user1: {
      email: "kieuquocanh4@gmail.com",
      name: "Kieu Quoc Anh",
      editing: false,
    },
    user2: { email: "abc@gmail.com", name: "Kim Quang Minh", editing: false },
  };

  ctrl.userName = "";
  ctrl.userEmail = "";
  ctrl.addUser = function () {
    let userOrder = "user" + (Object.keys(ctrl.users).length + 1);

    ctrl.users[userOrder] = {
      email: ctrl.userEmail,
      name: ctrl.userName,
      editing: false,
    };
    ctrl.userName = "";
    ctrl.userEmail = "";
  };

  ctrl.toggleEditing = function (user) {
    user.editing = !user.editing;
  };
  ctrl.deleteUser = function (key) {
    delete ctrl.users[key];

    // let userslength = Object.keys(ctrl.users).length + 1;
    let i = 1;
    let oldUsers = ctrl.users;
    ctrl.users = {};
    // console.log(oldUsers);
    // return;
    angular.forEach(oldUsers, function (value, key) {
      console.log(">>" + value);
      ctrl.users[`user${i}`] = value;
      i++;
    });
    console.log(ctrl.users);
    return;
  };
});

myApp.filter("toC", function () {
  return function (input) {
    return input - 273.15;
  };
});
