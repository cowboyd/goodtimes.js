// Karma configuration
// Generated on Tue Jan 13 2015 13:10:34 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "sinon-chai"],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/6to5/browser.js',
      'node_modules/chai-datetime/chai-datetime.js',
      'bower_components/moment/moment.js',
      'vendor/6to5-runtime.js',
      'vendor/es6-module-loader-6to5.src.js',
      'init.js',
      {
        pattern: "bower_components/**/*.js",
        served: true,
        included: false
      },
      {
        pattern: "bower_components/**/*.map",
        served: true,
        included: false
      },
      {
        pattern: "vendor/**/*.js",
        served: true,
        included: false
      },
      {
        pattern: "vendor/**/*.map",
        served: true,
        included: false
      },
      {
        pattern: "lib/**/*.js",
        served: true,
        included: false,
        watched: true
      },
      {
        pattern: "spec/**/*.js",
        served: true,
        included: false,
        watched: true
      }
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeCanary'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
