import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Content from '../../../components/layout/Content';
import AppHeader from '../../../components/layout/AppHeader';
import NotificationItem from '../../../components/NotificationItem';

const notifications = [
  {
    username: 'awesome_earthpix',
    type: 'liked',
    extra: 'your video.',
    ago: '18m',
  },
  {
    username: 'sarahannloreth',
    type: 'following',
    ago: '50m',
  },
  {
    username: 'istudio',
    type: 'mentioned',
    source: '@mo.k4 #music ',
    tags: '#songs #popmusic',
    ago: '1h',
  },
  {
    username: 'robertdowneyj',
    type: 'following',
    ago: '1d',
  },
  {
    username: 'rock_feller',
    type: 'comment',
    comment: 'Soooooo cute! ❤',
    ago: '5d',
  },
  {
    username: 'william_trotter',
    type: 'mentioned',
    source: '@mo.k4 #music',
    tags: '#songs #popmusic',
    ago: '7d',
  },
  {
    username: 'smith_music',
    type: 'mentioned',
    source: '@mo.k4 #music',
    tags: '#songs #popmusic',
    ago: '8d',
  },
];

function Notification(props) {
  return (
    <View style={{flex:1}}>
      <AppHeader onLeftPress={() => props.navigation.goBack()}/>
      <Content>
        <ScrollView style={styles.content}>
          {notifications.map((item, idx) => {
            return <NotificationItem key={idx} comment={item} {...props}/>;
          })}
        </ScrollView>
      </Content>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
export default Notification;
