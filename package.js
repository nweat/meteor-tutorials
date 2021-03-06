Package.describe({
  name: "mizzao:tutorials",
  summary: "Create super cool animated tutorials for your Meteor app",
  version: "0.6.6",
  git: "https://github.com/mizzao/meteor-tutorials.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use(['jquery', 'stylus', 'coffeescript'], 'client');
  api.use(['ui', 'templating'], 'client');

  // Weak dependencies on the most popular bootstrap packages
  api.use("twbs:bootstrap@3.3.2", 'client', {weak: true});
  api.use("nemo64:bootstrap@3.3.1_1", 'client', {weak: true});

  api.addFiles('templates.html', 'client');
  api.addFiles('tutorial.styl', 'client');

  api.addFiles('eventEmitter.coffee', 'client');
  api.addFiles('drags.js', 'client');

  api.addFiles('tutorial.coffee', 'client');
  api.addFiles('helpers.coffee', 'client');

  api.export('EventEmitter', 'client');
});
