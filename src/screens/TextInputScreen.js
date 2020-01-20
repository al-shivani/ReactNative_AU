import React from 'react';
import { Text, Button, StyleSheet, View,TextInput} from 'react-native';


class  TextInputScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {
text: ''
   };

   render(){
     return (
       <View style={{padding: 10}}>
         <TextInput
           style={{height: 40}}
           placeholder="Type here to translate!"
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
         />
         <Text style={{padding: 10, fontSize: 42}}>
           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
         </Text>
       </View>
      )
   }
}


const styles = StyleSheet.create({

});

export default TextInputScreen;
