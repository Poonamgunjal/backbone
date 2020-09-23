var TourListsView = Backbone.View.extend({
	model: new Tour(),
	tagName: 'div',
	initialize: function() {
		this.template = _.template($('.tour-card-template').html());
	},
	events: {
		
	},

	render: function() {
        this.$el.css('padding','15px');
        this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});