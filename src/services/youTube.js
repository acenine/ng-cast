angular.module('video-player')
.service('youTube', function($http) {
  this.getYouTubeVideos = function(stuff, callback) {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        maxResults: stuff.maxResults,
        part: 'snippet',
        q: stuff.query, //whatever the text on that search field is
        type: 'video',
        key: stuff.key
      },
      method: 'GET'
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('Stuff got gawt :D ', response.data.items);
      callback(response.data.items);
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      console.log('Nothin got gawt :(');
    });
  };
});