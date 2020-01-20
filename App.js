import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ButtonScreen from './src/screens/ButtonScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import TextInputScreen from './src/screens/TextInputScreen';
import StateScreen from './src/screens/StateScreen';
import PropsScreen from './src/screens/PropsScreen';
import StylingScreen from './src/screens/StylingScreen';
import FlexBoxScreen from './src/screens/FlexBoxScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import ScrollViewScreen from './src/screens/ScrollViewScreen';
import HTTPScreen from './src/screens/HTTPScreen';
import RouterScreen from './src/screens/RouterScreen';
import ViewScreen from './src/screens/ViewScreen';
import WebViewScreen from './src/screens/WebViewScreen';
import ActivityIndicatorScreen from './src/screens/ActivityIndicatorScreen';
import PickerScreen from './src/screens/PickerScreen';
import StatusBarScreen from './src/screens/StatusBarScreen';
import SwitchScreen from './src/screens/SwitchScreen';
import TextScreen from './src/screens/TextScreen';
import AlertScreen from './src/screens/AlertScreen';
import LoginScreen1 from './src/screens/LoginScreen1';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Button: ButtonScreen,
    FlatList: FlatListScreen,
    TextInput: TextInputScreen,
    State: StateScreen,
    Props: PropsScreen,
    Styling: StylingScreen,
    FlexBox : FlexBoxScreen,
    ScrollView: ScrollViewScreen,
    HTTP : HTTPScreen,
    Images: ImagesScreen,
    Router : RouterScreen,
    View: ViewScreen,
    WebView: WebViewScreen,
    ActivityIndicator : ActivityIndicatorScreen,
    Picker: PickerScreen,
    StatusBar: StatusBarScreen,
    Switch: SwitchScreen,
    Text: TextScreen,
    Alert: AlertScreen,
    Login :LoginScreen1
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
