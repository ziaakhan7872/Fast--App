import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Icons from '../theme/icons';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ResponsiveText from './layout/ResponsiveText';
import Styled from 'styled-components';

const StudioImage = Styled.Image`
    height: ${wp('15')}px;
    width: ${wp('15')}px;
    border-radius: ${wp('10')}px;
`;

function ConversationPayload({other, data}) {
  let typeOther = other;
  return (
    <View style={styles.container}>
      <View
        style={
          typeOther
            ? {alignItems: 'flex-end'}
            : {flexDirection: 'row', alignItems: 'flex-start'}
        }>
        {!typeOther ? (
          <StudioImage
            source={{
              uri: `https://picsum.photos/id/${211}/200/300`,
            }}
            style={{marginHorizontal: 5}}
          />
        ) : null}
        <View>
          {data.type === 'text' ? (
            <LinearGradient
              colors={
                typeOther ? ['#00A29D', '#0077B6'] : ['#EAECF2', '#EAECF2']
              }
              start={{x: 0, y: 0.0}}
              end={{x: 0.5, y: 0.5}}
              style={[
                styles.textPayloadRight,
                !typeOther ? styles.textPayloadLeft : null,
              ]}>
              <ResponsiveText style={typeOther ? styles.text : {color: '#000'}}>
                {data.payload}
              </ResponsiveText>
              {typeOther
                ? Icons.RightPayloadNotch(styles.rightNotch)
                : Icons.LeftPayloadNotch(styles.leftNotch)}
            </LinearGradient>
          ) : (
            <View
              style={{
                height: wp('40'),
                width: wp('100'),
              }}>
              <Image
                source={{uri: data.payload}}
                style={[
                  !typeOther ? styles.textPayloadLeft : styles.textPayloadRight,
                  typeOther
                    ? {alignSelf: 'flex-end'}
                    : {alignSelf: 'flex-start'},
                  {width: wp('60'), height: wp('40'), resizeMode: 'cover'},
                ]}
              />
            </View>
          )}
          <View
            style={[
              styles.timeAgoContainer,
              typeOther ? {alignSelf: 'flex-end'} : null,
            ]}>
            <ResponsiveText style={{fontSize: 3}}>9:10</ResponsiveText>
            {typeOther ? (
              <Image
                source={{uri: 'https://picsum.photos/id/22/200/300'}}
                style={styles.sender}
              />
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  rightPayloadTextContainer: {},

  payloadTextContainer: {
    // flexDirection: 'row',
    alignItems: 'flex-end',
    // paddingHorizontal: 15,
  },
  textPayloadRight: {
    maxWidth: wp('60'),
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    position: 'relative',
    zIndex: 5,
    marginHorizontal: 12,
  },
  textPayloadLeft: {
    maxWidth: wp('60'),
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 0,
    position: 'relative',
    zIndex: 5,
    marginHorizontal: 12,
  },
  rightNotch: {
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -1.4,
    right: -12,
    height: 13,
    width: 13,
    zIndex: 0,
    tintColor: '#0077B6',
  },
  leftNotch: {
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -0.8,
    left: -12,
    height: 13,
    width: 13,
    zIndex: 0,
    tintColor: '#EAECF2',
  },
  text: {
    color: '#fff',
  },
  timeAgoContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  sender: {
    height: 15,
    width: 15,
    borderRadius: 8,
    marginLeft: 8,
  },
});
export default ConversationPayload;
