import React from 'react';
import { StyleSheet,Button,Text,ScrollView, View } from 'react-native';
export default class countDownTimer extends React.Component{                                                             
        constructor(props){
                super(props);
                this.state={
                        time:props.time*60,
                }
        }
        componentDidUpdate(){
                if(this.state.time === 0){
                        clearInterval(this.countDown);                                                                            
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
                console.log("Intimer: "+nextProps.media);
                if(nextProps.media=="Stop"){
                        clearInterval(this.countDown);
                }
                else if(nextProps.media=="Start"){
                        clearInterval(this.countDown);
                        this.interval();
                }
                else{

                        this.setState(()=>({
                                time:nextProps.time*60,
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
                <Text style={this.props.style}>{doubleDigitFormat(this.state.time/60)+":"+doubleDigitFormat(this.state.time%60)}</Text>                                                                  
                );                                                                                              
        }


}