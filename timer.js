import React from 'react';
import { StyleSheet,Button,Text,ScrollView, View } from 'react-native';
import {vibrate} from './utils/index';
export default class countDownTimer extends React.Component{                                                             
        constructor(props){
                super(props);
                this.state={
                        time:props.time*60,
                        buffer:5,
                        break:5,
                }
        }
        componentDidUpdate(){
                if(this.state.time === 0){
                        clearInterval(this.countDown);
                        vibrate();
                        this.setState((state)=>({time:state.buffer*60,buffer:state.buffer===state.break?this.props.time:state.break,}));
                        if(this.props.media==="Start")
                        this.interval();                                                                            
                }                                                                                        
        }
        interval(){
                this.countDown=(setInterval(() => (                                                                                           
                        this.setState(previousState => (                                                                                
                                { time: previousState.time-1 }                                                                                
                                ))                                                                 
                                ), 1000)); 
                                
                        }
        UNSAFE_componentWillReceiveProps(nextProps){
                if(nextProps.media=="Stop"){
                        clearInterval(this.countDown);
                }
                else if(nextProps.media=="Start"){
                        clearInterval(this.countDown);
                        this.interval();
                }
                else{

                        this.setState((state)=>({
                                time:nextProps.time*60,
                                buffer:state.break,
                        }));
                        clearInterval(this.countDown);
                }
               
        }                                                                                           
        componentDidMount(){
                if(this.props.time>0 && this.props.media=="Start")
                this.interval();
        }
        componentWillUnmount(){
                clearInterval(this.countDown);
        }
        
        render(){                                                                                                       
                function doubleDigitFormat(number){return(("0"+parseInt(number)).slice(-2));}
                return(
                        <View style={{alignItems:"center"}}>
                <Text style={this.props.style}>{this.state.break!==this.state.buffer?"Break":"Task"}</Text>
                <Text style={this.props.style}>{parseInt(this.state.time/60)+":"+doubleDigitFormat(this.state.time%60)}</Text>                                                                  
                        </View>
                );                                                                                              
        }


}