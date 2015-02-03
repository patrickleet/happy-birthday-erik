Template.loader.helpers({
  loaderClass: function() {
    return Session.get('loader') ? 'animated fadeIn' : 'animated fadeOut not-visible';
  },
  text: function() {
    return Session.get('loader');
  }
});