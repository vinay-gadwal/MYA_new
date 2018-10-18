import React, { Component } from 'react';
import { View,AppRegistry,Button, ScrollView,ImageBackground,StatusBar, Image, Text,TouchableOpacity,StyleSheet } from 'react-native';
import StartClass from './Start_Class'
import Slider from 'react-native-slider'
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
console.disableYellowBox = true;
const pause = require('./icon/play.png');
const play = require('./icon/pause.png');

 class ProgressBar extends TrackPlayer.ProgressComponent {
  render() {
    return (
      <View style={styles.progress}>
        <View style={{ flex: this.getProgress(), backgroundColor: 'red' }} />
        <View style={{ flex: 1 - this.getProgress(), backgroundColor: 'red' }} />
      </View>
    );
  }
}

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default class Scroll extends TrackPlayer.ProgressComponent {
  constructor(props){
    super(props);
    this.state = { middlebutton:false,duration: 0,value:0.2, paused: true,
                    totalLength: 1,
                    currentPosition: 0,
                    selectedTrack: 0,
                    repeatOn: false,
                    shuffleOn: false,State:false,test:false
              };

              TrackPlayer.setupPlayer().then(() => {
                var track = [{
                    id: '1',
                    //url: require('./SampleAudio_0.4mb.mp3'),
                    url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
                    title: 'title',
                    artist:'art',
                            },
                            {
                              id: '2',
                              //url: require('./cheapThrill.mp3'),
                              url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
                              title: 'title',
                              artist:'art',
                                      }
                          ]
                           TrackPlayer.add(track).then(()=>
                           {
                           TrackPlayer.paused();
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
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "rgb(164,0,0)",
    
    } ,
    headerRight: (
      <Image style={{    height:25,
        width:25,
        // marginTop:40,
        // marginBottom:40,
        marginLeft:30,
        marginRight:10
      }} source={require('./icon/whitedot.png')}
  />
      ),
headerBackImage: <Image style={{    height:20,
          width:30,
          marginTop:40,
          marginBottom:40,
          marginLeft:30,
          marginRight:10
        }} source={require('./icon/BackWhite.png')}
   />,
   headerTitle:null 
  }

  skipForward(){
    if(this.state.duration>0){}

    }

   async skipToNext()
    {
            try {
              await TrackPlayer.skipToNext()
            } catch (_) {
              TrackPlayer.reset();
            }
    }

    async skipToPrevious()
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
                ].join(":").replace(/\b(\d)\b/g,"0$1")
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
        <Image  style={{width: 100, height: 100,marginTop:17}}
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
    async seekMusic(cValue){
      try {
        await TrackPlayer.seekTo(cValue);
      } catch (_) {
        TrackPlayer.reset();
      }
    }
   
    
  render() {
    TrackPlayer.getDuration().then((dur)=>{this.setState({duration: dur})});
      return (
        <ImageBackground source={require('./image/musicplayerbg.png')} style={styles.backgroundImage} >
       <View style={styles.container}>
            <StatusBar hidden={true} />
            <Image
                style={{width: "50%", height: "40%",marginLeft:"25%",marginBottom:"5%"}}
                source={{uri: 'https://awllpaper.com/wp-content/uploads/2018/03/music-wallpaper-mobile-best-mobile-music-wallpapers-7.jpg'}}
            />


            <Slider
               style={{marginLeft:"5%",marginRight:"5%"}}
               thumbStyle={customStyles7.thumb}
                trackStyle={customStyles7.track}
              minimumValue          = {0}
              maximumValue          = {Math.floor(parseInt(this.state.duration?this.state.duration:1))}
              thumbTintColor        = "white"
              minimumTrackTintColor = "red"
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
        <View style={{justifyContent: 'space-between',alignItems: 'flex-end',flexDirection:'row',marginTop:"2%"}}>
              <Text style={{color: 'white',backgroundColor:'transparent',width:40,marginRight:10,marginLeft:25,fontSize:14,justifyContent:'flex-end'}}>
                { this.state.isSeeking ? this.formatTime(this.seek) :this.counting(this.state.position) }
              </Text>
              <Text style={{color: 'white',backgroundColor:'transparent',width:40,marginRight:30,marginLeft:35,fontSize:14}}>
                { this.state.isSeeking ? this.formatTime(this.seek) : this.formatTime(this.state.duration) }
              </Text >
        </View>
        <View style={{justifyContent: 'space-between',alignItems: 'center',flexDirection:'row',marginTop:"%"}}>
           <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
              style={styles.button}
            >
            <Text style={styles.buttonText}>Auto Delay</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
              style={styles.button1}
            >
            <Text style={styles.buttonText}>Auto Pause</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.controls}>

            <TouchableOpacity onPress={()=>{this.seekMusic(this.state.position-15);}}>
            <Image style={{width: 50, height: 50,marginLeft:23,marginTop:40}}
                source={require('./icon/previous15.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.skipToPrevious(this.state.position+15);}}>
            <Image style={{width: 65, height: 65,marginTop:32}}
                source={require('./icon/previous.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => {
                                              this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });
                                               }}>
            {this.renderImage()}
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.skipToNext(this.state.position+15);}}>
            <Image style={{width: 65, height: 65,marginTop:32}}
                source={require('./icon/next.png')}
            />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>{this.seekMusic(this.state.position+15);}}>
           
            <Image style={{width: 50, height: 50,marginTop:40}}
                source={require('./icon/next15.png')}
            />
              </TouchableOpacity>
      </View>

    </View>
   </ImageBackground>
    );
  }
}
const customStyles7 = StyleSheet.create({
  track: {
    height: 8,

  },

  thumb: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderWidth: 8,
    borderRadius: 30,
  }
});

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      backgroundColor:"rgb(164,0,0)",
      paddingTop:"20%"
      },
      container: {
        flex: 1,
        justifyContent: 'center'
      },
      welcome: {
        fontSize: 20,textAlign: 'center',margin: 10,
      },
      instructions: {
        textAlign: 'center',color: 'black',marginBottom: 5,
      },
      progress: {
        height: 1,width: '100%',marginTop: 5,flexDirection: 'row',
      },
      controls: {
      flexDirection: 'row',justifyContent:'center',marginLeft:"10%",marginRight:"17%"
      },
      controlButtonContainer: {
        flex: 1,
      },
      controlButtonText: {
        fontSize: 18,textAlign: 'center',
      },
      slider:{
      backgroundColor:"black",alignItems: 'stretch',justifyContent: 'center',
      },
      button: {
        height: "45%",
        width: "40%",
        backgroundColor: "rgb(164,0,0)",
                           
        justifyContent: "center",
        marginLeft:"7%",
       
        borderRadius:40,
        borderWidth: 1,
      },
      button1: {
        height: "45%",
        width: "40%",
        backgroundColor: "rgb(155,155,155)",
        justifyContent: "center",
       marginRight:"7%",
        borderRadius:40,
        borderWidth: 1,
      },
      buttonText: {
        fontSize: 16,
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "700",
      },
})
