import React from 'react';
import { Text, Button, StyleSheet, View,Switch} from 'react-native';


class  SwitchScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {
   switch1Value: false,
   };

   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      console.log('Switch 1 is: ' + value)
   }

   render(){
     return (
       <View style = {styles.container}>
       <Text>{this.state.switch1Value?'Switch is ON':'Switch is OFF'}</Text>
        <Switch
        onValueChange = {this.toggleSwitch1}
        value = {this.state.switch1Value}/>
     </View>
      )
   }
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
     }
});

export default SwitchScreen;
