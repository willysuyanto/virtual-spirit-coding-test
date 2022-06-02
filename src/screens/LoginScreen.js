import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, Card, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {doLogin} from '../redux/slices/AuthSlice';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onLogin = () => {
    // Simulate HTTP request
    setLoading(true);
    setTimeout(() => {
      dispatch(doLogin({username: username, password: password}));
      setLoading(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.bgView} />
      <Card style={styles.cardContainer}>
        <Card.Title title="LOGIN" subtitle="Login to your account" />
        <Card.Content>
          <TextInput
            label="Username"
            value={username}
            mode="outlined"
            style={styles.input}
            right={<TextInput.Icon name="account" />}
            outlineColor="#2b72c4"
            activeOutlineColor="#2b72c4"
            onChangeText={value => setUsername(value)}
          />
          <TextInput
            label="Password"
            value={password}
            mode="outlined"
            right={<TextInput.Icon name="lock" />}
            outlineColor="#2b72c4"
            activeOutlineColor="#2b72c4"
            secureTextEntry
            onChangeText={value => setPassword(value)}
          />
          <Button
            contentStyle={styles.loginButton}
            style={styles.outerLoginButton}
            color="#2b72c4"
            loading={loading}
            onPress={onLogin}
            mode="contained">
            Login
          </Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fafafa',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  bgView: {
    backgroundColor: '#2b72c4',
    width: 'auto',
    minWidth: wp(100),
    height: hp(30),
    alignSelf: 'stretch',
    position: 'absolute',
    top: 0,
  },
  cardContainer: {
    padding: 10,
    marginHorizontal: wp(5),
    marginTop: hp(15),
  },
  loginButton: {
    height: hp(6),
  },
  outerLoginButton: {
    marginTop: hp(2),
  },
  input: {
    marginBottom: hp(1),
  },
});
