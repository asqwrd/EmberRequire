define({
	app_name:"appname",
	shim: {
		'ember': {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'slickNav': {
			deps: ['jquery'],
		},
		'nvd3': {
			deps: ['d3'],
		},
		'foundation': {
			deps: ['jquery'],
		},
		 "foundation.alerts": {
            deps: ["foundation"]
        },
        "foundation.clearing": {
            deps: ["foundation"]
        },
        "foundation.cookie": {
            deps: ["foundation"]
        },
        "foundation.dropdown": {
            deps: ["foundation"]
        },
        "foundation.forms": {
            deps: ["foundation"]
        },
        "foundation.joyride": {
            deps: ["foundation"]
        },
        "foundation.magellan": {
            deps: ["foundation"]
        },
        "foundation.orbit": {
            deps: ["foundation"]
        },
        "foundation.placeholder": {
            deps: ["foundation"]
        },
        "foundation.reveal": {
            deps: ["foundation"]
        },
        "foundation.section": {
            deps: ["foundation"]
        },
        "foundation.tooltips": {
            deps: ["foundation"]
        },
        "foundation.topbar": {
            deps: ["foundation"]
        },
		"foundation.offcanvas": {
            deps: ["foundation"]
        }
	},
	paths :{
		'App' 					: 'application/application',
		'models' 				: 'models',
		'components' 			: 'components',
		'views' 				: 'views',
		'controllers' 			: 'controllers',
		'templates' 			: 'templates',
		'jquery' 				: 'vendor/jquery',
		'd3' 					: 'lib/d3.v3',
		'nvd3' 					: 'lib/nv.d3',
		'modernizr' 			: 'vendor/modernizr',
		'foundation' 			: 'foundation/foundation',
		'foundation.offcanvas' 	: 'lib/foundation.offcanvas',
		'foundation.topbar' 	: 'foundation/foundation.topbar',
		'slickNav' 				: 'lib/jquery.slicknav',
		'handlebars' 			: 'lib/handlebars',
		'ember' 				: 'lib/ember',
		'text' 					: 'lib/text',
		'hbs' 					: 'lib/hbs',
		'domReady' 				: 'lib/domReady'
	},
	hbs: {
		disableI18n: true,
		templateExtensions: "html"
	}
});