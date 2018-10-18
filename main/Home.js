import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,Image,
  Navigator,TouchableOpacity
} from 'react-native';
import { createStackNavigator,DrawerNavigator } from 'react-navigation';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ENTRIES1 } from './static/entries';
import { ENTRIES2 } from './static/grid';
import SliderEntry from './components/SliderEntry';
import MyFlatList from './components/flatList/FlatList';
import Scroll from './Click_On_Album'
import Album from './Album'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const IS_ANDROID = Platform.OS === 'android';
const slideWidth = Math.round(0.75*viewportWidth);
const itemHorizontalMargin = Math.round(0.02*viewportWidth);

const SLIDER_1_FIRST_ITEM = 1;
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class HomeScreen extends Component {
  

  constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM ,
        };
    }
    //Function for Album Api
  
    // Drawer = DrawerNavigator(
    //   {
    //     Scroll: { screen: Scroll },
    //     Album: { screen: Album},
    //   },
    //   {
    //     navigationOptions: {
    //       gesturesEnabled: false
    //     },
    //   initialRouteName: "Scroll",
    //     contentOptions: {
    //       activeTintColor: "black"
    //     },
    //     drawerPosition: 'right',
    //     // contentComponent: props => <SideBar {...props} />
    //   }
    // );
    
    static navigationOptions = {
      
      headerLeft: null,
      headerTitle:null,
      headerStyle: {
        backgroundColor: "white",
      } ,
      title:"Home",
      headerBackTitle:'Bodypump 101',
      tintColor: '#0087B7'
    }
  _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={true}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
  }

  mainCarousel () {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                {/* <Text style={styles.title}>{`Featured Albums`}</Text>
                <Text style={styles.subtitle}>Browse our selected albums</Text> */}
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  windowSize={1}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(200, 0, 0, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }
    myfunc(){
      this.props.navigation.navigate('Scroll');
    }

  render() {
    const carouselMain = this.mainCarousel();

    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          { carouselMain }
        </View>
        {/* <View style={styles.container3}>
          <Text style={styles.textFilter}>FILTER</Text>
        </View> */}
        <View style={styles.container2}>
          <MyFlatList fl={ENTRIES2} mainFunc={this.myfunc.bind(this)}/>
          
        </View>
      </View>
    );
  }
}



const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 6,
  },
  container2: {
    flex:7,
    paddingTop:40,
  },
  container3: {
    flex: 2,
    paddingTop:20,
  },
  textFilter: {
    fontSize: 12,
    margin: 10,
  },
  exampleContainer: {
        paddingVertical: 0
  },
  title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
  },
  subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
  },
  slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
        paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
        paddingVertical: 8
  },
  paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
  }
});
