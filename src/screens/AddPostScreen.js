import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {addNewPost} from '../redux/slices/PostSlice';
import {useNavigation} from '@react-navigation/native';

export default function AddPostScreen() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const newPost = () => {
    setLoading(true);
    // Simulate HTTP Call
    setTimeout(() => {
      dispatch(addNewPost(url));
      setLoading(false);
      setUrl('');
      navigation.navigate('Home');
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.textStyle}>
        We can add new photo to the app by giving a valid image url from the
        internet.
      </Text>
      <TextInput
        value={url}
        mode="outlined"
        outlineColor="#2b72c4"
        activeOutlineColor="#2b72c4"
        onChangeText={value => {
          setUrl(value);
        }}
        label="Image URL"
      />
      <Button
        loading={loading}
        onPress={newPost}
        mode="contained"
        contentStyle={styles.buttonStyle}
        style={styles.buttonContainer}
        color="#2b72c4">
        Post Image
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: wp(10),
  },
  buttonStyle: {
    height: hp(6),
  },
  buttonContainer: {
    marginVertical: hp(1),
  },
  textStyle: {
    textAlign: 'center',
    marginVertical: hp(2),
  },
});
