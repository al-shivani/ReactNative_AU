import React from 'react';
import { Text, StatusBar, StyleSheet, View} from 'react-native';


class  StatusBarScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {

   };

   render(){
     return (
       <StatusBar
     barStyle = "dark-content"
     // dark-content, light-content and default
     hidden = {false}
     //To hide statusBar
     backgroundColor = "#00BCD4"
     //Background color of statusBar only works for Android
     translucent = {false}
     //allowing light, but not detailed shapes
     networkActivityIndicatorVisible = {true}
 />
      )
   }
}


const styles = StyleSheet.create({

});

export default StatusBarScreen;
