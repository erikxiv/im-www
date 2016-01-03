/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'informationmeet',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    'simple-auth': {
      authorizer: 'simple-auth-authorizer:jwt',
      authenticationRoute: 'sign_in',
      routeAfterAuthentication: 'home',
      routeIfAlreadyAuthenticated: 'home'
    },

    'auth0-ember-simple-auth': {
      clientID: "ltA5gmz2gxOMexHPyhNaHkSEbK5mCs3F",
      domain: "informationmeet.eu.auth0.com"
    },

    contentSecurityPolicy: {
      'img-src': "'self' https://*.googleusercontent.com",
      'font-src': "'self' data: https://cdn.auth0.com https://fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://cdn.auth0.com https://cdn.eu.auth0.com informationmeet.eu.auth0.com docker.local:49152",
      'connect-src': "'self' http://localhost:* ws://docker.local:* informationmeet.eu.auth0.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    }
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
