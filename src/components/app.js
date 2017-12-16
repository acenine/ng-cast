angular.module('video-player')

.component('app', {
  controller: function($scope){
    this.videoData = window.exampleVideoData;
    this.currentVideo = this.videoData[0];
    //console.log('this vid data: ', this.videoData[0])
  },
  templateUrl: '/src/templates/app.html'
  // TODO
});
