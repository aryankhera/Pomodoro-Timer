import React from 'react';
import { StyleSheet,Button,Text,ScrollView, View } from 'react-native';
import Timer from './timer.js';
export default class App extends React.Component{
  constructor(){
   super();
   this.state={
     currentTime:0.1,
     media:"Stop",
     title:"Start"
   }
  }
  render(){
   this.handle_press=()=>{
    this.setState({
      currentTime:0.1,
      media:"Reset",
      title:"Start",
      });
    
  }
 
    this.handle_new_press=()=>{
      this.setState((state)=>({media:state.title,title:(state.title==="Start"?"Stop":"Start"),}));
    }
    return (
      <View style={styles.container}>
      <Text style={styles.appName} >Pomodoro</Text>
      <View style={styles.elements}>
          <Button title="Reset" onPress={this.handle_press} />
          <Button title={this.state.title} onPress={this.handle_new_press} />
      </View>
	  <Timer style={styles.timer} media={this.state.media}time={this.state.currentTime} />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
	  alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#000000",
  },
  elements:{
    margin:15,
    // backgroundColor:"black",
    alignItems:"center",
    flexBasis:105,
    justifyContent:"space-around",
    
  },
  appName:{
    fontSize:30,
    color:"white",
  },
  timer:{
    fontSize:48,
    color:"white",
 }

});
