import React from 'react';
import { Text, Button, StyleSheet, View} from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
class  PropsScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {

   };

   render(){
     return (
       <View style={{alignItems: 'center', top: 50}}>
       <Greeting name='Rexxar' />
       <Greeting name='Jaina' />
       <Greeting name='Valeera' />
     </View>
      )
   }
}


const styles = StyleSheet.create({

});

export default PropsScreen;
