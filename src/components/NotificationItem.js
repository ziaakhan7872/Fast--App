import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import ResponsiveText from './layout/ResponsiveText';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icons from '../theme/icons';

function NotificationItem({comment, navigation}) {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => navigation.navigate('Profile')} activeOpacity={0.9}>
      <ResponsiveText style={styles.timeAgo}>{comment.ago}</ResponsiveText>
      <View style={styles.row}>
        <Image
          source={{
            uri: `https://picsum.photos/id/${87}/200/300`,
          }}
          style={styles.dp}
        />

        <View style={styles.userInfoContainer}>
          <ResponsiveText style={styles.username}>
            {comment.username}
          </ResponsiveText>
          <View style={{flexDirection: 'row'}}>
            {comment.type === 'liked' && (
              <>
                <ResponsiveText style={styles.type}>liked </ResponsiveText>
                <ResponsiveText style={{...styles.type, color: '#ddd'}}>
                  your video.
                </ResponsiveText>
              </>
            )}
            {comment.type === 'following' && (
              <ResponsiveText style={{...styles.type, color: '#DDD'}}>
                started following you.
              </ResponsiveText>
            )}
            {comment.type === 'mentioned' && (
              <View>
                <ResponsiveText style={{...styles.type, color: '#DDD'}}>
                  mentioned you in a comment:
                </ResponsiveText>
                <ResponsiveText style={{...styles.type}}>
                  Source: {comment.source}
                </ResponsiveText>
                <ResponsiveText style={{...styles.type}}>
                  Source: {comment.tags}
                </ResponsiveText>
              </View>
            )}
            {comment.type === 'comment' && (
              <View>
                <ResponsiveText style={{...styles.type, color: '#DDD'}}>
                  left a comment on your video:
                </ResponsiveText>
                <ResponsiveText style={{...styles.type}}>
                  Source: {comment.comment}
                </ResponsiveText>
              </View>
            )}
          </View>
        </View>
        <View style={styles.refComponent}>
          {(comment.type === 'liked' ||
            comment.type === 'mentioned' ||
            comment.type === 'comment') && (
            <Image
              source={{
                uri: `https://picsum.photos/id/${142}/200/300`,
              }}
              style={styles.refImg}
            />
          )}
          {comment.type === 'following' && Icons.Following()}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dp: {
    height: 55,
    width: 55,
    borderRadius: 35,
    resizeMode: 'cover',
    marginHorizontal: 10,
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 8,
    marginHorizontal: 8,
    marginBottom: 10,

  },
  timeAgo: {
    color: '#ddd',
    fontSize:3.5,
    fontWeight: 'bold',
    width: '10%',

  },
  username: {
    // fontSize: 1.3,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 3.5,
    color: '#6D4AD2',
    fontWeight: 'bold',
  },
  refComponent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  refImg: {
    height: 55,
    width: 55,
    borderRadius: 10,
    resizeMode: 'cover',
    marginHorizontal: 10,
  },
});
export default NotificationItem;
