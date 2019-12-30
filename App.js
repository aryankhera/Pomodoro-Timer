import React from 'react';
import { StyleSheet,Button,Text,ScrollView, View,TextInput,Keyboard } from 'react-native';
import Timer from './timer.js';
export default class App extends React.Component{
  constructor(){
   super();
   this.state={
     currentTime:25,
     media:"Stop",
     title:"Start",
     value:""
   }
  }

  render(){
   this.handle_press=()=>{
    this.setState({
      media:"Reset",
      title:"Start",
      });
    
  }
  this.inputText= (text)=>{
     if(typeof(parseInt(text))==="number" && text!==""){
    this.setState({
      currentTime:parseInt(text),
      media:"Reset",
      title:"Start",
      value:""
    })
    }
    else{
     this.setState({
      currentTime:25,
      media:"Reset",
      title:"Start",
      value:""

    })
    }
    }
 
    this.handle_new_press=()=>{
      this.setState((state)=>({media:state.title,title:(state.title==="Start"?"Stop":"Start"),}));
    }

    this.handle_key_press=()=>{
        this.inputText(this.state.value)
        Keyboard.dismiss();
    }
    return (
      <View style={styles.container}>
      <Text style={styles.appName} >Pomodoro</Text>
      <View style={styles.elements}>
          <Button title="Reset" onPress={this.handle_press} />
          <Button title={this.state.title} onPress={this.handle_new_press} />
      </View>
      <TextInput style={styles.inputStyle} placeholder="Enter task time" style={styles.appName} keyboardType="numeric" onSubmitEditing={this.handle_key_press} value={(this.state.value).toString()} onChangeText={(text)=>{this.setState({value:text,})}}></TextInput>
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
 },
 inputStyle:{
   borderWidth:5,
   borderColor:"white",
 }

});
