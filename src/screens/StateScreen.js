import React from 'react';
import { Text, Button, StyleSheet, View} from 'react-native';

class Blink extends React.Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}
class  StateScreen  extends React.Component {
  constructor(props) {
   super(props);
    }
   state = {
   };



   render(){
     return (
       <View>
       <Blink text='I love to blink' />
       <Blink text='Yes blinking is so great' />
       <Blink text='Why did they ever take this out of HTML' />
       <Blink text='Look at me look at me look at me' />
     </View>
      )
   }
}


const styles = StyleSheet.create({

});

export default StateScreen;
