import {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ERoutes} from '../../navigation/routes';

interface ILinkProps {
  to: ERoutes;
  children: string | string[];
}

const Link = ({to, children}: ILinkProps) => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate(to as never);
  }, [to, navigation]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    alignSelf: 'flex-start',
  },
  link: {
    fontSize: 12,
    color: 'blue',
  },
});

export default Link;
