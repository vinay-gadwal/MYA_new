// import React, { Component } from 'react';
// import { View,AppRegistry,Button, ScrollView,ImageBackground,StatusBar, Image, Text,TouchableOpacity,StyleSheet } from 'react-native';

// import DropdownMenu from 'react-native-dropdown-menu';
 
// export default class Demo extends Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ''
//     };
//   }
  
//   render() {
//     var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
//     return (
//       <View style={{flex: 1}}>
//         <View style={{height: 64}} />
//         <DropdownMenu
//           style={{flex: 1}}
//           bgColor={'white'}
//           tintColor={'#666666'}
//           activityTintColor={'green'}
//           // arrowImg={}      
//           // checkImage={}   
//           // optionTextStyle={{color: '#333333'}}
//           // titleStyle={{color: '#333333'}} 
//           // maxHeight={300} 
//           handler={(selection, row) => this.setState({text: data[selection][row]})}
//           data={data}
//         >
 
//           <View style={{flex: 1}}>
//             <Text>
//               {this.state.text} is the best language in the world
//             </Text>
//           </View>
 
//         </DropdownMenu>
//       </View>
//     );
//   }
  
// }
import React, { Component } from 'react';
import { Text, StyleSheet,Image } from 'react-native';
import Menu, {
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

const { ContextMenu, SlideInMenu, Popover } = renderers;

class BasicExampleComponent extends Component {

  constructor(props, ctx) {
    super(props, ctx);
    this.state = { renderer: Popover };
  }

  render() {
    return (
        <Menu
          renderer={this.state.renderer}
          rendererProps={{ anchorStyle: styles.anchorStyle }}
          
        >
          <MenuTrigger>
          <Image style={{
             height:25,width:25,
              marginTop:40,
                marginLeft:220}} source={require('./main/icon/more.png')}/>              
          </MenuTrigger>
          <MenuOptions >
            <MenuOption text='Context Menu'
              onSelect={() => this.setState({renderer: Popover})}/>
            <MenuOption text='Slide-in Menu'
              onSelect={() => this.setState({renderer: SlideInMenu})}/>
            <MenuOption text='Popover'
              onSelect={() => this.setState({renderer: ContextMenu})}/>
            <MenuOption text='Three (custom)'
              onSelect={() => alert('Selected custom styled option')} />
            <MenuOption disabled={true}>
              <Text style={{color: '#ccc'}}>Four (disabled)</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
    );
  }

}

const BasicExample = () => (
  <MenuProvider >
    <BasicExampleComponent />
  </MenuProvider>
)

export default BasicExample

const triggerStyles = {
  triggerText: {
    color: 'white',
  },
  triggerOuterWrapper: {
    backgroundColor: 'orange',
    padding: 5,
    flex: 1,
  },
  triggerWrapper: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  triggerTouchable: {
    underlayColor: 'darkblue',
    activeOpacity: 70,
    style : {
      flex: 1,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 30,
  },
  backdrop: {
    backgroundColor: 'red',
    opacity: 0.5,
  },
  anchorStyle: {
    backgroundColor: 'black',
    marginLeft:90
  },
});

