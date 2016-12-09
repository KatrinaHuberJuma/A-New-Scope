angular.module('EditModule', [])
.controller('EditController', function($http, $stateParams, $state) {
  let vm = this;
  vm.trackId = $stateParams.trackId;
 //edit name
 //delete track
  vm.deleteSong = function() {
    $http({
      method: 'POST',
      url: '/removeSong',
      data: {songName: vm.trackId}
    }).then(function() {
      $state.go('user');
    });
  };

  vm.updateSong = function(newName) {
    $http({
      method: 'POST',
      url: '/updateSong',
      data: {
        songName: vm.trackId,
        newName: newName
      }
    }).then(function() {
      $state.go('user');
    });
  };
});