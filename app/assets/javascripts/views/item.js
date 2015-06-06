var ItemView = Backbone.View.extend({
  initialize: function() {
    this.already_voted = !!this.$el.data("already-voted");
    this.rating = this.$el.data("rating");

    // TODO: проверка, может ли редактировать
    this.can_edit = true;

    this.render();
  },

  events: {
    "click .destroy": "onDestroy",
  },

  template_controls: _.template("<div class='controls pull-right'><a href'<%= url %>' class='destroy btn btn-danger btn-xs'>Удалить</a>"),

  render: function() {
    this.$el.html(JST["templates/item"]({
      position: this.position,
      title: this.model.get("title"),
    }));

    item = new VoteButtonView({el: this.$(".vote-area"), model: this.model})
    item.rating_path = this.rating_path;
    item.render();


    this.$(".title").append(this.template_controls({ url: this.rating_path }));
    
    return this;
  },

  onDestroy: function() {
    if(confirm("Действительно хотите удалить этот пункт?")) {
      this.remove();
    }
  },
});

