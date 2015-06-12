/// <reference path="../../typings/kendo/kendo.mobile.d.ts" />

module app {
	class Application {
		private instance: kendo.mobile.Application;
		
		init():void{
			this.instance = new kendo.mobile.Application(document.body, {
        		transition: 'slide', skin: 'flat', initial: 'home-view',
				init: function(){
					console.log('Initlized');
				}      			
			});
		}
		
		registerView(name: string, model: any = {}, events: any = {}):void{
			app[name] = { model: model, events: events };		
		}
		
		navigate(route: string, transition = 'slide:left'):void{
			this.instance.navigate(route, transition);
		}
	}
	
	export var application = new Application(); 
}