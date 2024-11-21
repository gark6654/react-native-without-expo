import {StyleSheet, Text, View} from 'react-native';
import {ERoutes} from '../navigation/routes';
import Link from '../components/Link';

const AboutScreen = () => (
  <View style={styles.container}>
    <Text>About screen</Text>
    <Link to={ERoutes.Home}>Go Home</Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;
