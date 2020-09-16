var BlogListView = Backbone.View.extend({
	tagName: "tr",
    template: _.template($('#blogs').html()),

	events: {
        "click .delete": "onDelete",
    },
    
    initialize: function() {
        $('#edit').on('click', this.onEdit);
        this.render();
    },
    
	render: function() {
        this.$el.html(this.template( this.collection.attributes));
       self=this;
		return this;
    },
    
    onEdit: function(){
		
		var author = $('#author1').val();
		var title = $('#title1').val();
		var URL = $('#URL1').val();
        var addBlog = new blogItems;
        console.log('hello',author);
        var addBlogs = addBlog.create({id:3,author:''+ author, title : ''+title, URL:''+ URL});
	  
  },
    onDelete: function(){
		this.remove();
	}
});
