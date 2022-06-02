import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import PostCard from '../components/Card/PostCard';
import {
  likeById,
  dislikeById,
  likeAll,
  dislikeAll,
  resetAllCount,
} from '../redux/slices/PostSlice';

export default function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const post = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onLikeAll = () => {
    dispatch(likeAll());
  };

  const onResetAll = () => {
    dispatch(resetAllCount());
  };

  const onDislikeAll = () => {
    dispatch(dislikeAll());
  };

  const likeItem = value => {
    dispatch(likeById(value));
  };

  const dislikeItem = value => {
    dispatch(dislikeById(value));
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.headers}>
            <Button
              icon={'thumb-up-outline'}
              mode="contained"
              color="#2b72c4"
              style={styles.buttonStyle}
              uppercase={false}
              onPress={onLikeAll}>
              Like All
            </Button>
            <Button
              icon={'cached'}
              mode="contained"
              color="#ffffff"
              style={styles.buttonStyle}
              onPress={onResetAll}
              uppercase={false}>
              Reset All
            </Button>
            <Button
              icon={'thumb-down-outline'}
              mode="contained"
              color="#db2c2c"
              style={styles.buttonStyle}
              onPress={onDislikeAll}
              uppercase={false}>
              Dislike All
            </Button>
          </View>
          <View style={styles.contents}>
            {post.data.map((item, index) => (
              <PostCard
                key={index}
                item={item}
                index={index}
                onLikePress={likeItem}
                onDislikePress={dislikeItem}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  headers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contents: {
    marginVertical: 10,
  },
  buttonStyle: {},
});
