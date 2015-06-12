(function (global) {
  var DemoViewModel,
      app = global.app = global.app || {};

  var demoUrl = "http://aylien.com/text-api";
    
  DemoViewModel = kendo.data.ObservableObject.extend({

    summarize: function () {
      if (!this.checkSimulator()) {
        aylien.summarize(
            demoUrl,
            function (result) {
              alert(result.sentences === undefined ? JSON.stringify(result) : result.sentences);
            });
      }
    },

    hashtags: function () {
      if (!this.checkSimulator()) {
        aylien.hashtags(
            demoUrl,
            function (result) {
              alert(result.hashtags === undefined ? JSON.stringify(result) : result.hashtags);
            });
      }
    },

    sentiment: function () {
      if (!this.checkSimulator()) {
        aylien.sentiment(
            demoUrl,
            function (result) {
              alert(JSON.stringify(result));
            });
      }
    },

      checkSimulator: function() {
      if (window.navigator.simulator === true) {
        alert('This plugin is not available in the simulator.');
        return true;
      } else if (window.aylien === undefined) {
        alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
        return true;
      } else {
        return false;
      }
    }

  });

  app.demoService = {
    viewModel: new DemoViewModel()
  };
})(window);