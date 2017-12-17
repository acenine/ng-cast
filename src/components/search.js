angular.module('video-player')
.component('search', {
  bindings: {
    youtubeVideos: '<',
    callback: '<'
  },
  controller: function($scope) {
    this.query = '';
    this.key = window.YOUTUBE_API_KEY;
    this.clearField = () => {
      this.query = '';
    };
    this.getInfo = () => {
      this.youtubeVideos({
        key: this.key,
        maxResults: 5,
        query: this.query
      }, this.callback);
      this.clearField();
    };
  },
  templateUrl: '/src/templates/search.html'
});
