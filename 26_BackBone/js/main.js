var President = Backbone.Model.extend({
  defaults: {
    name: 'John',
    surname: '',
    rate: 0
  },
  validate: function(attributes) {
  	if (attributes.name === '') {
  		return 'Name can\'t be empty';
  	}
  }
});

var PresidentsCollection = Backbone.Collection.extend({
  model: President
});

var presidentsCollection = new PresidentsCollection ([
  { name: 'Bill', surname: 'Clinton', rate: 10 },
  { name: 'John', surname: 'Bon', rate: 20 },
  { name: 'Bob', surname: 'Dob', rate: 50 },
  { name: 'Roy', surname: 'Tomson', rate: 100 }
]);

presidentsCollection.push(new President({ name: 'Petro', surname: 'Poroshenko', rate: 70}));

presidentsCollection.comparator = 'rate';

presidentsCollection.sort();

presidentsCollection.comparator = function(model) {
  return model.get('surname');
};

var PresidentView = Backbone.View.extend({
	tagName: 'div',
	className: 'president',
	template: _.template(`<div> <span><%= name %></span> <span><%=surname%></span> <span><%=rate%></span></div> <button class="btn btn-default">delete</button>`),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var PresidentsCollectonView = Backbone.View.extend({
	tagName: 'div',
	className: 'presidentsCollection',
	initialize: function (atrr) {
        var that = this;
        atrr.collection.on('add', function () {
            that.render();
        })
    },
	render: function() {
		var that = this;
		that.$el.html('');
		this.collection.forEach(function(president) {
			var presidentView = new PresidentView({ model: president });
			this.$el.append(presidentView.render().$el);
		}, this);
		return this;
	},
	events: {
		'click': function(event) {
			if (event.target.nodeName === "BUTTON") {
				var that = this;
				presidentsCollection.models.splice($(event.target).parent().index(), 1);
				that.render();
			}
		}
	}
});

var FormView = Backbone.View.extend({
	initialize: function (elemenent) {
        let newPresident;
        $('#add').on('click', function () {
            newPresident = {
                name: $('#name').val(),
                surname: $('#surname').val(),
                rating: $('#rate').val()
            }
            presidentsCollection.push(new President(newPresident));
        });
    }
});

let form = new FormView($('#form'));
$('#container').html(new PresidentsCollectonView({collection: presidentsCollection}).render().$el);