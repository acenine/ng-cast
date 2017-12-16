angular.module('video-player')
.component('videoListEntry', {
  //
  bindings: {
    videoEntry: '<',
    index: '<',
    callback: '<'
  },
  controller: function($scope) {

  },
  templateUrl: '/src/templates/videoListEntry.html'
});
