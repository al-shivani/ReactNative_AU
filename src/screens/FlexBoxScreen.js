import React from 'react';
import { Text, Button, StyleSheet, View} from 'react-native';


class  FlexBoxScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {

   };

   render(){
     return (
       <View style={{
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'center',
     }}>
       <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
       <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
       <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
     </View>
      )
   }
}


const styles = StyleSheet.create({

});

export default FlexBoxScreen;
