angular.module('video-player')
.component('videoListEntry', {
  //
  bindings: {
    videoEntry: '<',
    index: '<'
  },
  templateUrl: '/src/templates/videoListEntry.html'
});
