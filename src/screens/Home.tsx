import {StyleSheet, Text, View} from 'react-native';
import {ERoutes} from '../navigation/routes';
import Link from '../components/Link';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home screen</Text>
    <Link to={ERoutes.About}>Go About</Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
