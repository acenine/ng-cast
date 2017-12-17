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
    this.getVideo = (index) => {
      this.currentVideo = this.videoData[index];
    };
    this.getYouTubeVideos({
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      query: 'supercat'
    }, this.setVideoData);
  },
  templateUrl: '/src/templates/app.html'
});
