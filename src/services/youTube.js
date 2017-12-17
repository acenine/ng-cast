angular.module('video-player')
.service('youTube', function($http) {
  this.getYouTubeVideos = function(stuff, callback) {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        maxResults: stuff.maxResults,
        part: 'snippet',
        q: stuff.query,
        type: 'video',
        key: stuff.key
      },
      method: 'GET'
    }).then(function successCallback(response) {
      console.log('Stuff got gawt :D ', response);
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log('Nothin got gawt :(');
    });
  };
});