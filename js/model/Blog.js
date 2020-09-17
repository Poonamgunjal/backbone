var Blog = Backbone.Model.extend({
    defaults: {
		author: '',
		title: '',
		url: ''
	},
    initialize: function(){
        console.log("initialise call in model");
    }
});  


