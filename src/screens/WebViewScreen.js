import React from 'react';
import { Text, Button, StyleSheet, View,WebView} from 'react-native';


class  WebViewScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {

   };

   render(){
     return (
       //<View style = {styles.container}>
        <WebView
        source = {{ uri:
        'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint' }}
        />
    // </View>
      )
   }
}


const styles = StyleSheet.create({
  container: {
        height: 350,
     }
});

export default WebViewScreen;
