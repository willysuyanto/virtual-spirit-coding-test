import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {List} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {doLogout} from '../redux/slices/AuthSlice';

export default function MainMenu() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <List.Item
        title="Add Post"
        description="Add more post to the apps"
        onPress={() => {
          navigation.navigate('NewPost');
        }}
        left={props => <List.Icon {...props} icon="image-plus" />}
      />
      <List.Item
        title="Logout"
        description="Logging out from your account"
        onPress={() => {
          dispatch(doLogout());
        }}
        left={props => <List.Icon {...props} icon="logout" />}
      />
    </SafeAreaView>
  );
}
