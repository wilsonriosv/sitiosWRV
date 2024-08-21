/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Importar la configuración de Firebase para inicializarla
import './src/api/firebase';

AppRegistry.registerComponent(appName, () => App);
