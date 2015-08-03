Package.describe({
  name: 'digz6666:darkroomjs',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Darkroomjs packaged for meteor. Original source github: https://github.com/MattKetmo/darkroomjs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/digz6666/darkroomjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  //api.use(["meteor", "ryanswapp", "fabricjs"]);
  api.use("ryanswapp:fabricjs@0.0.1");

  api.addFiles('../build/darkroom.css', ["client"]);
  api.addFiles('../build/darkroom.js', ["client"]);
});

Package.onTest(function(api) {
  //api.use('tinytest');
  //api.use('digz6666:darkroomjs');
  //api.addFiles('darkroomjs-tests.js');
});
