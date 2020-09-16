var Blog = Backbone.Model.extend({
    initialize: function(){
        console.log("initialise call in model");
    }
});  
var blog_one = new Blog({id:1,author:'steve job',title:'mac',URL:'http://mac.com'});
var blog_two = new Blog({id:2,author:'steve job',title:'mac',URL:'http://mac.com'});

