import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Card} from 'react-native-paper';

export default function PostCard(props) {
  const renderLikeCount = count => {
    if (count <= 1) {
      return `${count} Like`;
    } else {
      return `${count} Likes`;
    }
  };
  return (
    <Card style={styles.cardContainer}>
      <Card.Cover source={{uri: props.item.imageUrl}} />
      <Card.Actions style={styles.cardAction}>
        <Card style={styles.likeCount}>
          <Card.Actions>
            <Text style={styles.likeText}>
              {renderLikeCount(props.item.likeCount)}
            </Text>
          </Card.Actions>
        </Card>
        <View style={styles.buttonContainer}>
          <Button
            icon={'thumb-up-outline'}
            mode="contained"
            color="#2b72c4"
            compact
            style={styles.buttonStyle}
            uppercase={false}
            onPress={() => {
              props.onLikePress(props.index);
            }}>
            Like
          </Button>
          <Button
            icon={'thumb-down-outline'}
            mode="contained"
            color="#db2c2c"
            compact
            style={styles.buttonStyle}
            onPress={() => {
              props.onDislikePress(props.index);
            }}
            uppercase={false}>
            Dislike
          </Button>
        </View>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonStyle: {
    marginLeft: 3,
  },
  likeCount: {
    width: 80,
    alignItems: 'center',
  },
  likeText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#111111',
  },
});
