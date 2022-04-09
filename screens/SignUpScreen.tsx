import { StyleSheet,Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

//{ navigation }: RootTabScreenProps<'TabOne'> Preveri to kodo (to bi moralo biti v oklepajih)
export default function TabOneScreen({ navigation }:RootStackScreenProps<'SignUp'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Button
        title='Sign up'
        onPress={()=>navigation.navigate('Root')}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
