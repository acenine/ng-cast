angular.module('video-player')
.component('app', {
  controller: function($scope, youTube) {



    this.videoData = window.exampleVideoData;
    this.currentVideo = this.videoData[0];

    this.getYouTubeVideos = function (params, callback) {
      youTube.getYouTubeVideos(params, callback);
    };
    this.setVideoData = (videos) => {
      this.videoData = videos;
      this.currentVideo = this.videoData[0];
    };
    // creates add video function
    this.getVideo = (index) => {
      this.currentVideo = this.videoData[index];
    };
    // transfer the video info based on the index to the video player

  },
  templateUrl: '/src/templates/app.html'
  // TODO
});
