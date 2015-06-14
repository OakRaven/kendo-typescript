/// <reference path="../../app.ts"/>
/// <reference path="../../../../typings/angularjs/angular"/>

angular.module('demoApp')
  .controller('homeController', ['$scope', function($scope){
    
  }])

// module app {
// 	export module views {
// 		let model = kendo.observable({
// 			goAbout: function(): void {
// 				app.application.navigate('#about-view');
// 			},
// 			goRoutes: function(): void {
// 				app.application.navigate('#routes-view');
// 			}
// 		});

// 		let events = {};

// 		application.registerView("home", model, events);
// 	}
// }