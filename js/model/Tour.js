var Tour = Backbone.Model.extend({
    defaults: {
        name: '',
        duration:'',
        description:'',
		address: '',
        rating: '',
        price:'',
        stops:'',
        peoples:''
	},
    initialize: function(){
        console.log("initialise call in  tour model");
    }
});  


