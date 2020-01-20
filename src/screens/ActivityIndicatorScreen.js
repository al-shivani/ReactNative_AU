import React from 'react';
import { Text, Button, StyleSheet, View,ActivityIndicator} from 'react-native';


class  ActivityIndicatorScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {
   };


   render() {
      const animating = this.state.animating
      return (
        <View style={[styles.container, styles.horizontal]}>
       <ActivityIndicator size="large" color="#0000ff" />
       <ActivityIndicator size="small" color="#00ff00" />
       <ActivityIndicator size="large" color="#0000ff" />
       <ActivityIndicator size="small" color="#00ff00" />
     </View>
      )
   }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
});

export default ActivityIndicatorScreen;
