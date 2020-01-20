import React from 'react';
import { Text, Button, StyleSheet, View} from 'react-native';


class  LoginScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {

   };

   render(){
     return (
       <View
       style={{
         flexDirection: 'row',
         height: 100,
         padding: 20,
       }}>
       <View style={{backgroundColor: 'blue', flex: 0.3}} />
       <View style={{backgroundColor: 'red', flex: 0.5}} />
       <Text>Hello World!</Text>
     </View>
      )
   }
}


const styles = StyleSheet.create({

});

export default LoginScreen;
