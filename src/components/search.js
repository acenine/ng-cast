angular.module('video-player')

.component('search', {
  bindings: {
    youtubeVideos: '<',
    callback: '<'
  },
  controller: function($scope) {
    this.query = '';
    this.key = window.YOUTUBE_API_KEY;
 //   this.query = 'superman';
    // this.params = {
    //   key: window.YOUTUBE_API_KEY,
    //   maxResults: 5,
    //   query: this.query
    // };
    this.clearField = () => {
      this.query = '';
    };
  },

  templateUrl: '/src/templates/search.html'
});
