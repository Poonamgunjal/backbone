var BlogView = Backbone.View.extend({
	tagName: "tr",
	el: "#blogs-table",
	collection:blogItems,
	
	events: {
		"click #add": "onAddBlog",
	},
	
    initialize: function() {
		
        this.render();
	},
	onAddBlog: function(){
		  var author = $('#author').val();
		  var title = $('#title').val();
		  var URL = $('#URL').val();
		  var addBlog = new blogItems;

          var addBlogs = addBlog.create({id:3,author:''+ author, title : ''+title, URL:''+ URL});
		  var blogsView = new BlogListView({ collection: addBlogs,model:Blog });

		this.$el.append(blogsView.$el);
	},
  
    render: function() {
        this.collection.each(function(my_collection) {
            var blogsView = new BlogListView({ collection: my_collection,model:Blog });
			blogsView.render();
            this.$el.append(blogsView.$el);
        }, this)
    }
});

var blogView = new BlogView({ collection: my_collection,model:Blog });
