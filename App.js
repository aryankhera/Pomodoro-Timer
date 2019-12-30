import React from 'react';
import { StyleSheet,Button,Text,ScrollView, View } from 'react-native';
import Timer from './timer.js';
export default class App extends React.Component{
  constructor(){
   super();
   this.state={
     currentTime:0.1,
     isPaused:false,
   }
  }
  render(){
   this.handle_press=()=>{
    this.setState({
      currentTime:25,
      });
    
  }

  return (
    <View style={styles.container}>
      <View   style={styles.elements}>
          <Button title="Reset" onPress={this.handle_press} />
      </View>
      <Text>Pomodoro</Text>
	  <Timer style={styles.timer} props={this.state.isPaused}time={this.state.currentTime} />
    </View>
  );
}
componentDidUpdate(){
  console.log(this.state.currentTime);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	  alignItems: 'center',
    justifyContent: 'center',
  },
  elements:{
    margin:10,

  },
 timer:{
         fontSize:48,
 }

});
