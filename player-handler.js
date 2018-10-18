
import TrackPlayer from 'react-native-track-player';

module.exports = async (data) => {
  if (data.type === 'playback-track-changed') {
    if (data.nextTrack) {

    }
  } else if(data.type == 'remote-play') {
        console.log("play");
        // The play button was pressed, we can forward this command to the player using
        TrackPlayer.play();
    } else if(data.type == 'remote-seek') {
        console.log("seeking");
        TrackPlayer.seekTo(data.position);
    } else if(data.type == 'remote-pause') {
    TrackPlayer.pause();
  } else if(data.type == 'remote-next') {
    TrackPlayer.skipToNext();
  } else if(data.type == 'remote-previous') {
    TrackPlayer.skipToPrevious();
  } else if (data.type == 'playback-state'){

  }
};
