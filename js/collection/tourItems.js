var Tours = Backbone.Collection.extend({
    model:Tour,
    url: 'https://www.natours.dev/api/v1/tours',
    parse: function(response) {
        var self = this;
        _.each(response.data.data, function(item, index) {
            var member = new self.model();
            member.set('name', item.name);
            member.set('description', item.summary);
            member.set('duration', item.difficulty+' '+item.duration+'-DAY TOUR');
            member.set('address', item.startLocation.description);
            member.set('rating', '<b>'+item.ratingsAverage+'</b> rating( '+item.ratingsQuantity+')');
            member.set('price', '<b>$'+item.price+'</b> per person');
            member.set('stops', '<b>'+item.locations.length+'</b> stops');
            member.set('people', '<b>'+item.maxGroupSize+'</b> peoples');
            self.push(member);
        });
        return this.models;
    },
    initialize: function () {
        this.bind("reset", function (model, options) {
            console.log("Inside event");
            console.log(model);
            
        });
}
});	
var tours = new Tours();
tours.fetch({
    
    success: function(response) {
        console.log(response);
}
});	