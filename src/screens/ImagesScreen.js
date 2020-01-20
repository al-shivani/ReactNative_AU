import React from 'react';
import { Text, Button, StyleSheet, View,Image} from 'react-native';


class  ImagesScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {

   };

   render(){
     return (
       <View>

       <Image
         style={{ height: 250}}
         source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP3Vji_4Bk1hJJzVO6QCIcAkza34Q2IjyahXDJtgBY4xRUsImC'}}
       />
       <Image source = {require('../../images/images.jpeg')} />

     </View>
      )
   }
}


const styles = StyleSheet.create({

});

export default ImagesScreen;
