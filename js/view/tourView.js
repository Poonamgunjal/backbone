var TourView = Backbone.View.extend({
	model: tours,
	el: $('.tour-card-list'),
	
	initialize: function() {
		this.render();
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(tour) {
			self.$el.append((new TourListsView({model: tour})).render().$el);
		});
		return this;
	}
});
