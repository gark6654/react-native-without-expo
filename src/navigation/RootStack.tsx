import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AboutScreen, HomeScreen} from '../screens';
import {stackOptions} from './config';
import {ERoutes} from './routes';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator initialRouteName={ERoutes.Home} screenOptions={stackOptions}>
    <Stack.Screen name={ERoutes.Home} component={HomeScreen} />
    <Stack.Screen name={ERoutes.About} component={AboutScreen} />
  </Stack.Navigator>
);

export default RootStack;
