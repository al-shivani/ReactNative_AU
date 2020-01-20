import React from 'react';
import { Text, Button, StyleSheet, View, TouchableOpacity,ScrollView} from 'react-native';


class  HomeScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {

   };

   render(){
     return (
       <ScrollView>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('State')} ><Text>State</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Props')} ><Text>Props</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Styling')} ><Text>Styling</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('FlexBox')} ><Text>FlexBox</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('FlatList')} ><Text>FlatList</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('TextInput')}><Text>TextInput</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('ScrollView')} ><Text>ScrollView</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Images')} ><Text>Images</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('HTTP')} ><Text>HTTP</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Button')} ><Text>Buttons</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('View')} ><Text>View</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('WebView')} ><Text>WebView</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('ActivityIndicator')} ><Text>Activity Indicator</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Picker')} ><Text>Picker</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Switch')} ><Text>Switch</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('Text')} ><Text>Text</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button}  onPress={() => this.props.navigation.navigate('Alert',{name: 'Jane'})} ><Text>Alert</Text></TouchableOpacity>




     </ScrollView>

   )

   }

   onPress = () => {
   this.setState({
     count: this.state.count+1
   })
 }
}


const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    marginLeft: 20,
    marginRight:20,
   alignItems: 'center',
   backgroundColor: '#DDDDDD',
   padding: 10
 },
});

export default HomeScreen;
