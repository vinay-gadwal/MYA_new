import React, { Component } from 'react';
import { View,AppRegistry,Switch, ScrollView,Platform, Image, Text,TouchableOpacity,StyleSheet } from 'react-native';
import StartClass from './Start_Class'
import Slider from 'react-native-slider'
// import DropdownMenu from 'react-native-dropdown-menu';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
console.disableYellowBox = true;
const pause = require('./icon/greyplay.png');
const play = require('./icon/greypause.png');
 const greenplay = require('./icon/greenplay.png')


class ProgressBar extends TrackPlayer.ProgressComponent {
  render() {
    return (
      <View style={styles.progress}>
        {/* <View style={{ flex: this.getProgress(), backgroundColor: 'red' }} />
        <View style={{ flex: 1 - this.getProgress(), backgroundColor: 'red' }} /> */}
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
    this.state = { middlebutton:false,duration: 0,value:0.2, paused: true,status:false,
                    totalLength: 1,VIEW:false,
                    currentPosition: 0,
                    selectedTrack: 0,
                    repeatOn: false,ClassSong:true,
                    shuffleOn: false,text: '', SwitchOnValueHolder :  false,SwitchOnValueHolder1:false
              
                  };
                  setInterval(() => {
                    this.setState(previousState => {
                      return { isShowingText: !previousState.isShowingText };
                    });
                  },);
    
              TrackPlayer.setupPlayer().then(() => {
                var track = [{
                    id: 'unique track id',
                    url: require('./IAmHero.mp3'),
                    // url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
                    title: 'title',
                    artist:'art',
                            },
                            {
                              id: 'unique track id',
                              url: require('./StillTheOne.mp3'),
                              // url: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
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
      backgroundColor: "white",
    } ,
     headerRight: (
                <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
                style={{ height: 30,
                  width: 110,
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderColor:'rgb(164,0,0)',
                  marginLeft:40,marginBottom:5, marginTop:1,marginRight:10,
                  paddingTop:8,
                  paddingBottom:8,
                  borderRadius:40,
                  borderWidth: 1,}}
              >
              <Text style={{fontSize: 12,
                  alignSelf: "center",
                  textAlign: "center",
                  color: "rgb(164,0,0)",
                  fontWeight: "700",}}>15 Min</Text>
              </TouchableOpacity>
                                    ),
              headerBackImage:  <Image style={{    height:30,
                width:30,
                marginTop:40,
                marginBottom:40,
                marginLeft:15,
                marginRight:10}} source={require('./icon/back.png')}
          />,
          headerTitle:null 
          
  }
  
  renderImage(){
            var imgSource = this.state.middlebutton? play : pause;
            return (
              <View>
              <Image 
                          style={{height:30,marginTop:15,
                            width:30,
                            marginTop:5,
                            marginBottom:5,marginLeft:100}}
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

  renderAlbum(){
    var imgSource = this.state.status? greenplay : null;
    return (
      <View>
      <Image 
                 style={styles.ButtonStyle}
                    source={ imgSource }
                  />
      </View>
    );
}
SetRemoveClass(){
  if(this.state.ClassSong == false){
    return(
    <Text>Set As Class Song</Text>
    )
  }
  else{
    return(
      <Text>Remove From Class Song</Text>
    )
  }

}

renderView(){
  if(this.state.VIEW ){
    return(
      <View style={{flex:1}}>
      <ScrollView >
        <TouchableOpacity  onPress={ () => {
                                       this.setState({ status: !this.state.status });
                                                }}>
      <View style={{flexDirection:'row',backgroundColor:'white',padding:15}}>
                <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                <View style={{flexDirection:'column',paddingTop:20,paddingLeft:10}}>
                <Text>Still The One</Text>
                <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
              </View>
             
              {this.renderAlbum()}
             
                <TouchableOpacity>
                <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
                </TouchableOpacity>
              
                <View style={{backgroundColor:'transparent'}}>
                  <MenuProvider>
                  <Menu style={{backgroundColor:'transparent'}}>
                    <MenuTrigger style={{backgroundColor:'transparent'}}>
                    <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
                    </MenuTrigger>
                    <MenuOptions style={{right:110,backgroundColor:'transparent',marginTop:80}}>
                    
                    <View style={{flexDirection: 'row'}}>
                    <MenuOption style={{fontSize:25}} value={1} text='Auto Play      ' />                         
                    <Switch                      
                    onValueChange={(value) => this.ShowAlert(value)}
                    style={{marginBottom: 10,tintColor:'red',ios_backgroundColor:'red',thumbTintColor:'black'}}
                    value={this.state.SwitchOnValueHolder}
                    tintColor="red"
                    thumbTintColor={this.state.value ? "grey" : "grey"}
                    onTintColor="green"
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }} />
                    
                    </View>
                   
                    <View style={{flexDirection: 'row'}}>
                    <MenuOption style={{fontSize:25,}} value={1} text='Auto Delay   ' />                         
                    <Switch                      
                    onValueChange={(value) => this.Drop_Do(value)}
                    style={{marginBottom: 10,tintColor:'red',ios_backgroundColor:'red',thumbTintColor:'black'}}
                    value={this.state.SwitchOnValueHolder1}
                    tintColor="red"
                    thumbTintColor={this.state.value ? "grey" : "grey"}
                    onTintColor="green"
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }],marginLeft:1 }} />                         
                    </View>
                    <TouchableOpacity  onPress={ () => {
                                       this.setState({ ClassSong: !this.state.ClassSong });
                                                }}>
                    <MenuOption>
                    {this.SetRemoveClass()}
                     </MenuOption>
                   </TouchableOpacity>
                   </MenuOptions>
                 </Menu>
               </MenuProvider>
              </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
       </View>
    )

  }
  else if(!this.state.VIEW){
    return(
       <View style={{flex:1}}>
      <ScrollView style={{height:"40%"}}>
        <TouchableOpacity  onPress={ () => {
                                       this.setState({ status: !this.state.status });
                                                }}>
      <View style={{flexDirection:'row',backgroundColor:'rgb(250,240,239)',padding:10}}>
                <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                <View style={{flexDirection:'column',paddingTop:25,paddingLeft:10}}>
                <Text>Still The One</Text>
                <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
              </View>
             <View >
              {this.renderAlbum()}
             </View>
                <TouchableOpacity>
                <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
                </TouchableOpacity>
              
                <View style={{backgroundColor:'transparent'}}>
                  <MenuProvider>
                  <Menu style={{backgroundColor:'transparent'}}>
                    <MenuTrigger style={{backgroundColor:'transparent'}}>
                    <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
                    </MenuTrigger>
                    <MenuOptions style={{right:110,backgroundColor:'transparent',marginTop:80}}>
                    
                    <View style={{flexDirection: 'row'}}>
                    <MenuOption style={{fontSize:25}} value={1} text='Auto Play      ' />                         
                    <Switch                      
                    onValueChange={(value) => this.ShowAlert(value)}
                    style={{marginBottom: 10,tintColor:'red',ios_backgroundColor:'red',thumbTintColor:'black'}}
                    value={this.state.SwitchOnValueHolder}
                    tintColor="red"
                    thumbTintColor={this.state.value ? "grey" : "grey"}
                    onTintColor="green"
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }} />
                    
                    </View>
                   
                    <View style={{flexDirection: 'row'}}>
                    <MenuOption style={{fontSize:25,}} value={1} text='Auto Delay   ' />                         
                    <Switch                      
                    onValueChange={(value) => this.Drop_Do(value)}
                    style={{marginBottom: 10,tintColor:'red',ios_backgroundColor:'red',thumbTintColor:'black'}}
                    value={this.state.SwitchOnValueHolder1}
                    tintColor="red"
                    thumbTintColor={this.state.value ? "grey" : "grey"}
                    onTintColor="green"
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }],marginLeft:1 }} />                         
                    </View>
                    <TouchableOpacity  onPress={ () => {
                                       this.setState({ ClassSong: !this.state.ClassSong });
                                                }}>
                    <MenuOption>
                    {this.SetRemoveClass()}
                     </MenuOption>
                   </TouchableOpacity>
                   </MenuOptions>
                 </Menu>
               </MenuProvider>
              </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
      </View>
    )

  }
}

  ShowAlert = (value) =>{
 
    this.setState({
   
      SwitchOnValueHolder: value
    }) 
  }

  
  FunctionToOpenSeventhActivity = () =>
    {
       this.props.navigation.navigate('StartClass');
       
    }
    Drop_Do= (value) =>{
 
      this.setState({
     
        SwitchOnValueHolder1: value
      }) 
    }
   
    
  render() {
    
      return (
    //       <View style={{backgroundColor:"white",flex:1,paddingBottom:0}}>
    //         <View style={{flexDirection:'row',backgroundColor:"rgb(246,246,248)",width:"100%",justifyContent:"flex-start"}}>
    //           <Image style={{height:140,width:180,marginTop:20,marginBottom:10,marginLeft:20,marginRight:10}} source={require('./image/running.jpeg')}/>
    //           <Text style={{paddingTop:80,paddingBottom:20,paddingLeft:10,paddingRight:20}}>BODY WARMUP</Text>
    //         </View>
    //         <TouchableOpacity >
    //         <View style={{backgroundColor:'#DEDBDB',height:180}}>
    //         <ScrollView style={{height:"40%"}}>
    //     <TouchableOpacity  onPress={ () => {
    //                                    this.setState({ status: !this.state.status });
    //                                             }}>
    //   <View style={{flexDirection:'row',backgroundColor:'rgb(250,240,239)',padding:10}}>
    //             <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
    //             <View style={{flexDirection:'column',paddingTop:25,paddingLeft:10}}>
    //             <Text>Still The One</Text>
    //             <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
    //           </View>
    //          {/* <View >
    //           {this.renderAlbum()}
    //          </View> */}
    //             <TouchableOpacity>
    //             <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
    //             </TouchableOpacity>
              
    //             <View style={{backgroundColor:'transparent'}}>
    //               <MenuProvider>
    //               <Menu style={{backgroundColor:'transparent'}}>
    //                 <MenuTrigger style={{backgroundColor:'transparent'}}>
    //                 <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
    //                 </MenuTrigger>
    //                 <MenuOptions style={{right:110,backgroundColor:'transparent',marginTop:80}}>
                    
    //                 <View style={{flexDirection: 'row'}}>
    //                 <MenuOption style={{fontSize:25}} value={1} text='Auto Play      ' />                         
    //                 <Switch                      
    //                 onValueChange={(value) => this.ShowAlert(value)}
    //                 style={{marginBottom: 10,tintColor:'red',ios_backgroundColor:'red',thumbTintColor:'black'}}
    //                 value={this.state.SwitchOnValueHolder}
    //                 tintColor="red"
    //                 thumbTintColor={this.state.value ? "grey" : "grey"}
    //                 onTintColor="green"
    //                 style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }} />
                    
    //                 </View>
                   
    //                 <View style={{flexDirection: 'row'}}>
    //                 <MenuOption style={{fontSize:25,}} value={1} text='Auto Delay   ' />                         
    //                 <Switch                      
    //                 onValueChange={(value) => this.Drop_Do(value)}
    //                 style={{marginBottom: 10,tintColor:'red',ios_backgroundColor:'red',thumbTintColor:'black'}}
    //                 value={this.state.SwitchOnValueHolder1}
    //                 tintColor="red"
    //                 thumbTintColor={this.state.value ? "grey" : "grey"}
    //                 onTintColor="green"
    //                 style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }],marginLeft:1 }} />                         
    //                 </View>
    //                 <TouchableOpacity  onPress={ () => {
    //                                    this.setState({ ClassSong: !this.state.ClassSong });
    //                                             }}>
    //                 <MenuOption>
    //                 {this.SetRemoveClass()}
    //                  </MenuOption>
    //                </TouchableOpacity>
    //                </MenuOptions>
    //              </Menu>
    //            </MenuProvider>
    //           </View>
    //     </View>
    //     </TouchableOpacity>
    //     </ScrollView>
    //          </View>
    //          </TouchableOpacity>
    //            <View style={{marginBottom:5,marginTop:5}}>
    //           <Slider 
    //             style={{ flexDirection: 'column',backgroundColor: 'white',paddingTop:8,paddingBottom:5}}
    //             thumbStyle={customStyles7.thumb}
    //             trackStyle={customStyles7.track}
    //             minimumValue          = {0}
    //             maximumValue          = {this.state.duration}
    //             thumbTintColor        = "rgb(164,0,0)"
    //             minimumTrackTintColor = "rgb(164,0,0)"
    //             maximumTrackTintColor = '#DEDBDB'
    //             step                  = {1}
    //             onValueChange ={ val=>{
    //               TrackPlayer.pause();
    //               this.seek = val;
    //               this.setState({isSeeking:true})
    //             }}
    //             onSlidingComplete={ val=>{
    //               this.setState({isSeeking: false },()=> {
    //                 TrackPlayer.seekTo(this.seek);
    //                 this.position = this.seek;
    //                 TrackPlayer.play();
    //               })
    //             }}
    //             value={this.state.isSeeking ? this.seek : this.state.position}
    //           />   
    //           </View>
    //         <View style={styles.controls}> 
              
    //         <TouchableOpacity onPress={this.FunctionToOpenSeventhActivity}>        
    //             <Image 
    //             //style={styles.ButtonStyle1}
    //             style={{height:28,paddingTop:15,
    //               width:30,
    //               //marginTop:5,
    //               paddingLeft:10}}
    //                 source={require('./icon/uparrow.png')}
    //             />
    //         </TouchableOpacity>
    //           <Text style={{paddingTop:5,paddingBottom:13,fontSize:16,paddingLeft:30,fontWeight:'bold'}}>Still The One</Text>
    //         <TouchableOpacity onPress={ () => {
    //                                           this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });
    //                                            }}>
    //         {this.renderImage()}
    //         </TouchableOpacity>               
    //         </View>
    //         <View style={{flexDirection:'row',justifyContent:"flex-end"}}>
    //         {/* <View style={{flexDirection:'row'}}> */}
    //         <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
    //           style={styles.button}
    //           //onPress={this.onLoginPress.bind(this)}
    //         >
    //         <Image style={styles.clockButton} source={require('./icon/startclassclock.png')} />              
    //         <Text style={styles.buttonText}>Start Class</Text>
    //         </TouchableOpacity>
    //         {/* </View> */}
    //         {/* <View style={{flexDirection:'row'}}> */}

    //         <TouchableOpacity 
    //           style={styles.button1}
    //           //onPress={this.onLoginPress.bind(this)}
    //         >
    //         <Image style={styles.clockButton} source={require('./icon/startclassclock.png')} />              
    //         <Text style={styles.buttonText}>Start Workout</Text>
    //         </TouchableOpacity>
    //           {/* </View> */}
    //           </View>
    //         <View>
    //         </View>
    //     </View>
    <View style={styles.container}> 
    <View style={{flex:.95}}>
     <View style={styles.ContainerTopAlbum}>
         <Image style={styles.ContailerAlbum} source={require('./image/running.jpeg')}/>
             <Text style={styles.ContainerText}>BODY WARMUP</Text>
            </View>
            <TouchableOpacity >
            <View style={styles.AlbumList}>
          <ScrollView style={{height:"100%"}}>
        <TouchableOpacity  onPress={ () => {
                                       this.setState({ status: !this.state.status });
                                                }}>
      <View style={{flexDirection:'row',backgroundColor:'rgb(250,240,239)',padding:10,height:"100%"}}>
                <Image style={{height:80,width:80,marginTop:10,marginBottom:5,marginLeft:10,marginRight:10}} source={require('./image/running.jpeg')} />
                <View style={{flexDirection:'column',paddingTop:25,paddingLeft:10}}>
                <Text>Still The One</Text>
                <Text style={{fontSize:10,marginTop:5}}>Track type-WARMUP</Text>
              </View>
                <View style={{flexDirection:'row',marginLeft:2}}>
                {this.renderAlbum()}
                <TouchableOpacity>
                <Image style={styles.ButtonStyle} source={require('./icon/download.png')} />              
                </TouchableOpacity>
              
                <View style={{backgroundColor:'transparent'}}>
                  <MenuProvider>
                  <Menu style={{backgroundColor:'transparent'}}>
                    <MenuTrigger style={{backgroundColor:'transparent'}}>
                    <Image style={styles.ButtonStyle} source={require('./icon/more.png')}/>              
                    </MenuTrigger>
                    <MenuOptions style={{right:110,backgroundColor:'transparent',marginTop:80}}>
                    
                    <View style={{flexDirection: 'row'}}>
                    <MenuOption style={{fontSize:25}} value={1} text='Auto Play      ' />                         
                    <Switch                      
                    onValueChange={(value) => this.ShowAlert(value)}
                    style={{marginBottom: 10,tintColor:'red',ios_backgroundColor:'red',thumbTintColor:'black'}}
                    value={this.state.SwitchOnValueHolder}
                    tintColor="red"
                    thumbTintColor={this.state.value ? "grey" : "grey"}
                    onTintColor="green"
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }} />
                    
                    </View>
                   
                    <View style={{flexDirection: 'row'}}>
                    <MenuOption style={{fontSize:25,}} value={1} text='Auto Delay   ' />                         
                    <Switch                      
                    onValueChange={(value) => this.Drop_Do(value)}
                    style={{marginBottom: 10,tintColor:'red',ios_backgroundColor:'red',thumbTintColor:'black'}}
                    value={this.state.SwitchOnValueHolder1}
                    tintColor="red"
                    thumbTintColor={this.state.value ? "grey" : "grey"}
                    onTintColor="green"
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }],marginLeft:1 }} />                         
                    </View>
                    <TouchableOpacity  onPress={ () => {
                                       this.setState({ ClassSong: !this.state.ClassSong });
                                                }}>
                    <MenuOption>
                    {this.SetRemoveClass()}
                     </MenuOption>
                   </TouchableOpacity>
                   </MenuOptions>
                 </Menu>
               </MenuProvider>
              </View>
              </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
             </View>
             </TouchableOpacity>
             </View>
              <Slider 
                style={styles.SliderStyle}
                thumbStyle={customStyles7.thumb}
                trackStyle={customStyles7.track}
                minimumValue          = {0}
                maximumValue          = {this.state.duration}
                thumbTintColor        = "rgb(164,0,0)"
                minimumTrackTintColor = "rgb(164,0,0)"
                maximumTrackTintColor = '#DEDBDB'
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
              
            <TouchableOpacity onPress={this.FunctionToOpenSeventhActivity}>        
                <Image 
                //style={styles.ButtonStyle1}
                style={{height:28,
                  width:30,
                  //marginTop:5,
                  }}
                    source={require('./icon/uparrow.png')}
                />
            </TouchableOpacity>
              <Text style={{paddingTop:5,paddingBottom:13,fontSize:16,paddingLeft:30,fontWeight:'bold'}}>Still The One</Text>
            <TouchableOpacity onPress={ () => {
                                              this.togglePlayback();this.setState({ middlebutton: !this.state.middlebutton });
                                               }}>
            {this.renderImage()}
            </TouchableOpacity>               
            </View>
            <View style={{flexDirection:'row',justifyContent:"flex-end"}}>
            <TouchableOpacity onPress={this.FunctionToOpenSixthActivity}
              style={styles.button}
            >
            <Image style={styles.clockButton} source={require('./icon/startclassclock.png')} />              
            <Text style={styles.buttonText}>Start Class</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button1}
            >
            <Image style={styles.clockButton} source={require('./icon/startclassclock.png')} />              
            <Text style={styles.buttonText}>Start Workout</Text>
            </TouchableOpacity>
              </View>
            <View>
            </View>
      </View>
     );
  }
}
const customStyles7 = StyleSheet.create({
  track: {
    height: 5,
    
  },
  
  thumb: {
    width: 65,
    height: 65,
    backgroundColor: 'rgb(164,0,0)',
    borderColor: '#ffffff',
    borderWidth: 8,
    borderRadius: 30,
  }
});
const styles = StyleSheet.create({
          container:{
            flex:1,
            
            paddingTop: (Platform.OS) === 'ios' ? 0 : 0,
              
          },
          ContailerAlbum:{
            marginRight:10,
            marginLeft:10,
            width:'50%',
            height:'80%',
            marginTop:10
          },
          ContainerText:{
            paddingTop:"20%",paddingLeft:10,paddingRight:20
          },
          ContainerTopAlbum:{
            // flex:1,
            flexDirection:'row',
            backgroundColor:"rgb(246,246,248)",
            width:"100%",
            height:"30%",
            justifyContent:"center"
          },
          AlbumList:{
            backgroundColor:'#DEDBDB',justifyContent:'space-between',marginTop:1
          },
          SliderStyle:{
            
            flexDirection: 'column',
            backgroundColor: 'white',
            paddingTop:8,
            paddingBottom:15,
            height:"10%"
          },
          ControlButton:{

          },
            ButtonStyle:{
              height:"5%",
              width:"5%",
              padding:15,
            marginTop:20,
                backgroundColor:'transparent',
                marginRight:"5%"
            }, 
            buttonText: {
              fontSize:16,
              alignSelf: "center",
              textAlign: "center",
              color: "white",
              fontWeight: "500",
              paddingBottom:10,
              paddingBottom:20
            },
            clockButton:{
              height:25,
              width:25,
              paddingLeft:8,
              paddingTop:20,
              paddingRight:10
            },
            controls: {
              flexDirection: 'row',backgroundColor:"white",paddingLeft:20,paddingRight:20,justifyContent:'space-between'
            },
            button: {
              height: "150%",
              width: "50%",
              backgroundColor: "rgb(164,0,0)",
              //alignSelf: "stretch",
              marginTop: 5,
              justifyContent: "center",
              paddingVertical: 10,
           
              flexDirection:'row'
            },
            button1: {
              height: "150%",
              width: "50%",
              backgroundColor: "black",
              //alignSelf: "stretch",
              marginTop: 5,
              justifyContent: "center",
              paddingVertical: 10,
             
              flexDirection:'row'
            },
          
            ButtonStyle1:{
              height:28,
              width:27,
              marginTop:20,
            
            
            },
            ButtonStyle2:{
              height:28,
              width:27,
              marginTop:30,
              marginLeft:20,
            },
            MainContainer :{
 
              justifyContent: 'center',
              alignItems: 'center',
              flex:1,
              margin: 10
               
              }
})