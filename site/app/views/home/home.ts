/// <reference path="../../app.ts"/>

module app {
	export module views {
		let model = kendo.observable({
			goAbout: function(): void {
				app.application.navigate('#about-view');
			},
			goRoutes: function(): void {
				app.application.navigate('#routes-view');
			}
		});

		let events = {};

		application.registerView("home", model, events);
	}
}