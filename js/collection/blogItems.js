var blogItems = Backbone.Collection.extend({
    Model: Blog,
    url:'/views'
});

var my_collection = new blogItems([blog_one,blog_two]);
