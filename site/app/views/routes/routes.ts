/// <reference path="../../app.ts"/>

module app {
	export module views {
		let model = kendo.observable({
			goAbout: function(): void {
				app.application.navigate('about-view');
			}
		});

		let events = {};		
		
		application.registerView("routes", model, events);		
	}
}