import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, UIManager,Platform } from 'react-native';

export default  class BoxView extends React.Component {
     state = {
         
    }

    constructor(props){
        super(props)

        this.fadeAnim = new Animated.Value(0);  // Initial value for opacity: 0      
        this.moveAnim = new Animated.Value(1);  
        
        this.spinValue = new Animated.Value(0); 
    }

spin () {
  this.spinValue.setValue(0)
  Animated.timing(
    this.spinValue,
    {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      
    }
  ).start(() => this.spin())
}

move () {
  this.moveAnim.setValue(0)
  Animated.timing(
    this.moveAnim,
    {
      toValue: 40,
      duration: 4000,
      easing: Easing.linear
    }
  ).start();
}

fade(){
    this.fadeAnim.setValue(0);
Animated.timing(                  // Animate over time
        this.fadeAnim,            // The animated value to drive
        {
            toValue: 0,                   // Animate to opacity: 1 (opaque)
            duration: 1000, 
             easing: Easing.linear             // Make it take a while
                                            //delay
        }
        ).start(()=>{
                console.log("anim finished");

        }); 

}

      componentDidMount() {

        this.spin();
        this.move();
//        this.fade();

                               // Starts the animation

        //console.log("didMount");
        //{opacity: fadeAnim}
  }

    render() {
        let  { fadeAnim  } = this.fadeAnim;

         const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
//<Animated.View style={[styles.fill,{ backgroundColor: this.props.color},{transform: [{rotate: spin}] }] }></Animated.View>
        return (
        <View style={[styles.box,{ backgroundColor: '#555'}]} >
            <View style={[styles.circle,{ backgroundColor: this.props.darkcolor}] }>
                <Text >{this.props.delay} , {this.props.timer} </Text>
                
                <Animated.View style={[styles.fill,{ backgroundColor: this.props.color,height: this.moveAnim, transform: [{rotate: spin}] }] }></Animated.View>
            </View>            
          </View>
        );
    }
}


const styles = StyleSheet.create({
  box:{ 
    width: 200, 
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'},

  circle: {
      width: 140,
      height: 140, 
      //borderRadius: 140/2,
      backgroundColor: 'red',      
      justifyContent:'flex-end'      
  },

  fill:{
      height:20, 
      backgroundColor: '#FDD7E4',
      alignSelf: 'stretch' 
    }

});