import React from 'react';
import { Text, Button, StyleSheet, View} from 'react-native';


class  ButtonScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {

   };

   render(){
     return (
        <View>
        <Button
          title="Button"
          onPress={() => alert(' Button pressed')}>
         </Button>
        </View>
      )
   }
}


const styles = StyleSheet.create({

});

export default ButtonScreen;
