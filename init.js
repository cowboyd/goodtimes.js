System.baseURL = '/base/lib/';
System.paths["spec/*"] = '/base/spec/*.js';
System.paths["moment"] = '/base/vendor/moment.js';

(function() {
  var imports = [];
  for (var file in __karma__.files) {
    var match = file.match(/^\/base\/(spec\/.*)\.js/);
    if (match) {
      var moduleId = match[1];
      imports.push(System.import(moduleId));
    }
  }
  var start = __karma__.start;
  __karma__.start = function(config) {
    Promise.all(imports).then(function() {
      start(config);
    }, function(err) {
      console.log('ERROR', err);
    });
  };

})();
