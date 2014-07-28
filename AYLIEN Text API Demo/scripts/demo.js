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
              alert(result.sentences);
            });
      }
    },

    hashtags: function () {
      if (!this.checkSimulator()) {
        aylien.hashtags(
            demoUrl,
            function (result) {
              alert(result.hashtags);
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