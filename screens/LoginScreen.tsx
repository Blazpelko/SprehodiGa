import { Button, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

//{ navigation }: RootTabScreenProps<'TabOne'> Preveri to kodo (to bi moralo biti v oklepajih)
export default function TabOneScreen({ navigation }: RootStackScreenProps<'LogIn'>) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/images/dogoLogo.jpg')} />
        <Text>Sprehodi.ga</Text>
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          placeholder=" Username"
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          placeholder=" Password"
        />
        <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Root')}>
          <Text>Log in</Text>
        </Pressable>
        <Pressable style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
          <Text>Sign up</Text>
        </Pressable>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpButton: {
    borderRadius: 15,
    backgroundColor: '#00cc66',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30
  },
  loginButton: {
    borderRadius: 15,
    backgroundColor: '#00cc66',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30,
    marginBottom :6
  },
  input: {
    borderWidth: 2,
    borderColor: "thistle",
    borderRadius: 15,
    marginBottom: 6,
    height: 50,
    width: '70%',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00cc66",
  },
  footer: {
    backgroundColor: "white",
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: "#00cc66",
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
