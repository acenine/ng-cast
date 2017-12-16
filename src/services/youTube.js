angular.module('video-player')
.service('youTube', function($http) {
  this.getYouTubeVideos = function(params, callback) {
    return (

      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
          maxResults: params.maxResults,
          part: 'snippet',
          q: params.queResultsry, //whatever the text on that search field is
          type: 'video',
          key: params.keyResults
        },
        type: 'GET',
        success: function(data) {
          callback(data.items);
        },
        error: function(data) {
          console.error('error', data);
        }
      })
    );
  };
});