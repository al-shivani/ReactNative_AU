import React from 'react';
import { Text, Picker, StyleSheet, View} from 'react-native';


class  PickerScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {
     user: ''
   };
   updateUser = (user) => {
         this.setState({ user: user })
      }
   render(){
     return (
       <View>
           <Picker selectedValue = {this.state.user} onValueChange ={(itemValue, itemPosition) => {this.updateUser(itemValue)}}>
              <Picker.Item label = "Steve" value = "steve" />
              <Picker.Item label = "Ellen" value = "ellen" />
              <Picker.Item label = "Maria" value = "maria" />
           </Picker>
           <Text style = {styles.text}>{this.state.user}</Text>
        </View>
      )
   }
}


const styles = StyleSheet.create({
  text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
     }
});

export default PickerScreen;
