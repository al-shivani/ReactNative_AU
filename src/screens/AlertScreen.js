import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View,Alert} from 'react-native';


class  AlertScreen  extends React.Component {
  constructor(props) {
   super(props);
   console.log(props);
    }
   state = {

   };

    showAlert = () =>{
      Alert.alert(
        'Alert Title',
'My Alert Msg',
[
 {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
 {
   text: 'Cancel',
   onPress: () => console.log('Cancel Pressed'),
   style: 'cancel',
 },
 {text: 'OK', onPress: () => console.log('OK Pressed')},
],
{cancelable: false},
);
   }

   render(){
     return (
        <View>
        <TouchableOpacity onPress = {this.showAlert} style = {styles.button}>
           <Text>{this.props.navigation.state.params.name}</Text>
        </TouchableOpacity>
        </View>
      )
   }
}


const styles = StyleSheet.create({
  button: {
        backgroundColor: '#4ba37b',
        width: 200,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20
     }
});

export default AlertScreen;
