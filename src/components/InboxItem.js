import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styled from 'styled-components';
import ResponsiveText from './layout/ResponsiveText';

const StudioImage = Styled.Image`
    height: ${wp('15')}px;
    width: ${wp('15')}px;
    border-radius: ${wp('10')}px;
`;

function InboxItem({username, message, timeAgo, onPress, status}) {
  return (
    <TouchableOpacity
        activeOpacity={0.9}
      style={[
        styles.container,
        {borderLeftWidth: 5, borderLeftColor: 'transparent'},

        status
          ? {
              backgroundColor: '#F3F4F9',
              borderLeftColor: '#0099A2',
            }
          : null,
      ]}
      onPress={onPress}
      activeOpacity={0.9}>
      <View style={{position: 'relative'}}>
        <StudioImage
          source={{
            uri: `https://picsum.photos/id/${Math.floor(
              Math.random() * Math.floor(45),
            )}/200/300`,
          }}
        />
        {status && (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#84C857',
              position: 'absolute',
              right: 0,
              top: 3,
              borderWidth: 2,
              borderColor: '#FFF',
            }}
          />
        )}
      </View>
      <View style={styles.infoContainer}>
        <ResponsiveText style={styles.username}>{username}</ResponsiveText>
        <ResponsiveText style={styles.message}>{message}</ResponsiveText>
      </View>
      <View style={styles.timeContainer}>
        <ResponsiveText style={{...styles.message}}>{timeAgo}</ResponsiveText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100'),
    height: wp('20'),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoContainer: {
    marginHorizontal: 10,
    width: wp('60'),
  },
  username: {
    fontWeight: 'bold',
    fontSize: 4.8,
  },
  message: {
    color: '#aaa',
    fontWeight: '200',
    fontSize: 3.5,
  },
  timeContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 8,
  },
});
export default InboxItem;
