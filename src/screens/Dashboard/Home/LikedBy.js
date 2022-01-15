import React from 'react';
import {View, ScrollView} from 'react-native';
import Container from '../../../components/layout/Container';
import AppHeader from '../../../components/layout/AppHeader';
import Like from '../../../components/Like';

const likedData = [
  {
    uri: 'https://picsum.photos/id/354/200/300',
    username: 'William Bells',
    description: '5 km from your location',
  },
  {
    uri: 'https://picsum.photos/id/877/200/300',
    username: 'Richard Hanna',
    description: '5 km from your location',
  },
  {
    uri: 'https://picsum.photos/id/15/200/300',
    username: 'Blair Dota',
    description: '5 km from your location',
  },
  {
    uri: 'https://picsum.photos/id/235/200/300',
    username: 'Jaha Nick',
    description: '5 km from your location',
  }, {
    uri: 'https://picsum.photos/id/378/200/300',
    username: 'Bellamy',
    description: '5 km from your location',
  }, {
    uri: 'https://picsum.photos/id/247/200/300',
    username: 'Ostermil',
    description: '5 km from your location',
  }, {
    uri: 'https://picsum.photos/id/421/200/300',
    username: 'Nick David',
    description: '5 km from your location',
  },
  {
    uri: 'https://picsum.photos/id/666/200/300',
    username: 'William ',
    description: '5 km from your location',
  },
];
function LikedBy (props) {
  return (
    <Container>
      <AppHeader
        title={'People who liked'}
        onLeftPress={() => props.navigation.goBack()}
      />
      <ScrollView>
        {likedData.map((item, idx) => {
          return <Like key={idx} item={item}/>;
        })}
      </ScrollView>
    </Container>
  );
}

export default LikedBy;
