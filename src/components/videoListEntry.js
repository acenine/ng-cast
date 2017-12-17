angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    videoEntry: '<',
    index: '<',
    callback: '<'
  },
  templateUrl: '/src/templates/videoListEntry.html'
});
