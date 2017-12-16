angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    callback: '<'
  },
  controller: function($scope) {
  },
  templateUrl: '/src/templates/videoList.html'
});
