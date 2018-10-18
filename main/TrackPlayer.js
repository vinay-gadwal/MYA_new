import React, { Component } from 'react';
import {Platform,StyleSheet,Text,TouchableOpacity,View,Image,Button,Aler,StatusBar} from 'react-native';
import Slider from 'react-native-slider'
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
console.disableYellowBox = true;
const pause = require('./img/play-512.png');
const play = require('./img/pause-512.png');
//import Header from './Header'
function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default class App extends TrackPlayer.ProgressComponent {
  
  constructor(props){
    super(props);
    this.state = { middlebutton:true,duration: 0,value:0.2, paused: true,
                    totalLength: 1,
                    currentPosition: 0,
                    selectedTrack: 0,
                    repeatOn: false,
                    shuffleOn: false,
               };
    
    TrackPlayer.setupPlayer().then(() => {
      var track = [{
          id: 'unique track id',
          url: require('./SampleAudio_0.4mb.mp3'),
          // url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
          title: 'title',
          artist:'art',
                  },
                  {
                    id: 'unique track id',
                    url: require('./advertising.mp3'),
                    // url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
                    title: 'title',
                    artist:'art',
                            }
                ]
                 TrackPlayer.add(track).then(()=>
                 {
                 TrackPlayer.play();
                  TrackPlayer.setVolume(1);
                })
          });
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ]
    });
  }
  skipForward(){
    if(this.state.duration>0){}

  }

  skipToNext = async () => 
  {
          try {
            await TrackPlayer.skipToNext()
          } catch (_) {
            TrackPlayer.reset();
          }
  }

  skipToPrevious = async () => 
  {
            try {
              await TrackPlayer.skipToPrevious()
            } catch (_) {}
  }
  counting(seconds)
  {
            return seconds > 3600 
            ?
              [
                parseInt(seconds / 60 / 60),
                parseInt(seconds / 60 % 60),
                parseInt(seconds % 60)
              ].join(":").replace(/\b(\d)\b/g, "0$1")
            :
              [
                parseInt(seconds / 60 % 60),
                parseInt(seconds % 60)
              ].join(":").replace(/\b(\d)\b/g, "0$1")
  }
  // componentWillMount()  {
  //   this.formatTime();
  //   this.renderImage();
  // }
  formatTime(seconds) 
  {
    if(seconds > 0){
      var rem = (this.state.duration) - (this.state.position);
      return [
                    parseInt(rem / 60 % 60),
                    parseInt(rem % 60)
                  ].join(":").replace(/\b(\d)\b/g, "0$1")
    }
  }

  renderImage(){
    var imgSource = this.state.middlebutton? play : pause;
    return (
      <View>
      <Image  style={{width: 50, height: 50,marginLeft:50,marginRight:50}}
        source={ imgSource }
      />
      </View>
    );
  }
  togglePlayback()
  {
        if(this.state.middlebutton == true)
        {
        TrackPlayer.pause();
        }
        else if(this.state.middlebutton == false)
        {
        TrackPlayer.play();
        }
  }
  onBack() {
    if (this.state.duration > 0) {
      
      this.setState({ duration: this.state.duration + 15 });
    }
  }
  render() {
          TrackPlayer.getDuration().then(duration=>this.setState({duration}))

    return (
    <View style={styles.container}>
            <StatusBar hidden={true} />            
            {/* <Header message="MYA"/> */}
            <Image
                style={{width: 200, height: 300,marginLeft:90,marginRight:20,marginBottom:30}}
                source={{uri: 'https://awllpaper.com/wp-content/uploads/2018/03/music-wallpaper-mobile-best-mobile-music-wallpapers-7.jpg'}}
            />
            <Text  style={{color:'black',alignItems:'center',marginLeft:150,marginRight:20,marginBottom:30}}>Track-Player</Text>
        
        <View style={{justifyContent: 'space-between',alignItems: 'flex-end',flexDirection:'row'}}>
            <Text style={{color: 'black',backgroundColor:'transparent',width:40,marginRight:10,fontSize:12,justifyContent:'flex-end'}}>
              { this.state.isSeeking ? this.formatTime(this.seek) :this.counting(this.state.position) }
            </Text>
            <Text style={{color: 'black',backgroundColor:'transparent',width:40,fontSize:12,marginLeft:10}}>
              { this.state.isSeeking ? this.formatTime(this.seek) : this.formatTime(this.state.duration) }
            </Text >
        </View>
            
            <Slider 
              //  style={styles.slider}
              minimumValue          = {0}
              maximumValue          = {this.state.duration}
              //thumbTintColor        = "black"
              minimumTrackTintColor = "black"
              maximumTrackTintColor = "#F6F1F0"
              step                  = {1}
              onValueChange ={ val=>{
                TrackPlayer.pause();
                this.seek = val;
                this.setState({isSeeking:true})
              }}
              onSlidingComplete={ val=>{
                this.setState({isSeeking: false },()=> {
                  TrackPlayer.seekTo(this.seek);
                  this.position = this.seek;
                  TrackPlayer.play();
                })
              }}
              value={this.state.isSeeking ? this.seek : this.state.position}
        />
        
        <View style={styles.controls}> 
            
            <TouchableOpacity>
            <Image style={{width: 30, height: 30,marginLeft:20}}
                source={require('./img/15secback.png')}
            />
            </TouchableOpacity> 
            
            <TouchableOpacity >        
            <Image style={{width: 30, height: 30,marginLeft:30}}
                source={require('./img/backward.png')}
            />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ () => {
                                              this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });
                                               }}>
            {this.renderImage()}
            </TouchableOpacity>
            {/* <ControlButton title={this.state.middlebutton} onPress={() => this.togglePlayback()} /> */}
            
            <TouchableOpacity>        
            <Image style={{width: 30, height: 30,marginRight:30}}
                source={require('./img/forward.png')}
            />
            </TouchableOpacity > 
            <TouchableOpacity >
            <Image style={{width: 30, height: 25,marginRight:10}}
                source={require('./img/15secforw.png')}
            />
              </TouchableOpacity> 
        </View>

    </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    //backgroundColor:'black'
    },
    welcome: {
      fontSize: 20,textAlign: 'center',margin: 10,
    },
    instructions: {
      textAlign: 'center',color: 'black',marginBottom: 5,
    },
    progress: {
      height: 1,width: '100%',marginTop: 10,flexDirection: 'row',
    },
    controls: {
      marginVertical: 20,flexDirection: 'row',
    },
    controlButtonContainer: {
      flex: 1,
    },
    controlButtonText: {
      fontSize: 18,textAlign: 'center',
    },
    slider:{
    backgroundColor:"black",alignItems: 'stretch',justifyContent: 'center',
    }
  });