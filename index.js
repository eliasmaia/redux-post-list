/*copiar igual tanto para Android quanto para iOs*/
import { AppRegistry } from 'react-native';
import App from './src/App';
require('RCTNativeAppEventEmitter');

AppRegistry.registerComponent('reduxPostsList', () => App)
