import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, UIManager,Platform } from 'react-native';

export default  class BoxView extends React.Component {
     state = {
         
    }
 
    constructor(props){
        super(props)
        this.moveAnim = new Animated.Value(140);          
    }
move () {  
  Animated.timing(
    this.moveAnim,
    {
      toValue: 0,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true
    }
  ).start();
}
      componentDidMount() {
       // this.move();
  }

    render() {        
//<Animated.View style={[styles.fill,{ backgroundColor: this.props.color},{transform: [{rotate: spin}] }] }></Animated.View>
        return (
        <View style={[styles.box,{ backgroundColor: '#555'}]} >
            <View style={[styles.circle,{ backgroundColor: this.props.darkcolor}] }>
                <Text >{this.props.delay} , {this.props.timer} </Text>                
                <Animated.View style={[styles.fill,{ backgroundColor: this.props.color,transform:[{ translateY: this.moveAnim }] }] }></Animated.View>
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
      height:140, 
      backgroundColor: '#FDD7E4',
      alignSelf: 'stretch'    
    }

});