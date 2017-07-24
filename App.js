import React from 'react';
import { StyleSheet, Text, View, Animated, Easing,Dimensions } from 'react-native';
import  BoxView  from './Components/box.component.js';

const { width } = Dimensions.get("window");

export default class App extends React.Component {

    constructor(props){
        super(props) 
        //this.spinValue = new Animated.Value(0)
this.state = {
        greenTimer: (1000 ),
        orangeTimer: (1000 * 60 * 5),
        redTimer: (1000 * 60 * 5), 
      //spinValue: new Animated.Value(0)
    }

    /*
        this.state = {
        //    'greenTimer': (1000 * 60 * 15), //15 minutes = 1000 ms * 60s * 15            
            greenTimer: (1000 ),
            orangeTimer: (1000 * 60 * 5),
            redTimer: (1000 * 60 * 5), 
        };
          */
    }
/*

*/

shouldComponentUpdate() {
    return false
  }

componentDidMount () {
  //this.spin()
}

/*
spin () {  
  Animated.timing(
    this.state.spinValue,
    {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    }
  ).start((e) => {
    if(e.finished){
      this.spin()
    }
  })
}



            <Animated.Image
        style={{
          width: 227,
          height: 200,
          transform: [{rotate: this.state.spinValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg']
                        })}] 
          }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
      />

*/


  render() {
 

    return (
      <View style={{flex: 1,backgroundColor:'powderblue' }}>
        <View style={{ flex:.9,alignItems:'center', marginTop:30}} >
          <BoxView color="red" darkcolor="maroon" timer={this.state.redTimer } delay={this.state.greenTimer + this.state.orangeTimer}  ></BoxView>
          <BoxView color="orange" darkcolor="#806300"  timer={this.state.orangeTimer } delay={this.state.greenTimer} ></BoxView>
          <BoxView color="lawngreen" darkcolor="darkgreen"  timer={this.state.greenTimer } delay={0} ></BoxView>          
        </View>
        <View style={{ flex:.1, backgroundColor: 'silver'}} >
          <Text>knoppen</Text> 
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
