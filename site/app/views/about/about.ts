/// <reference path="../../app.ts"/>

module app {
	export module views {		
		let model = kendo.observable({
			
		});
		
		let events = {};
		
		application.registerView("about", model, events);
	}
}