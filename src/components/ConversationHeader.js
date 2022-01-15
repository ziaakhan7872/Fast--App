import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icons from '../theme/icons';
import Input from './layout/Input';
import Styled from 'styled-components';
import ResponsiveText from './layout/ResponsiveText';
import Search from '../assets/icons/search.png'
const StudioImage = Styled.Image`
    height: ${wp('15')}px;
    width: ${wp('15')}px;
    border-radius: ${wp('10')}px;
`;

function ConversationHeader(props) {
  return (
    <LinearGradient
      colors={['#F7F8FB', '#fff']}
      start={{x: 0, y: 0}}
      end={{x: 0.8, y: 0.0}}
      style={{minHeight: wp('30'), width: wp('100%')}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={[styles.content, Platform.OS !== 'ios' ? {marginTop: getStatusBarHeight()}:null]}>
        <TouchableOpacity onPress={props.onBackArrow}>
          {Icons.BackArrow(styles.backArrowIcon)}
        </TouchableOpacity>
        <StudioImage
          source={{
            uri: `https://picsum.photos/id/22/200/300`,
          }}
          style={{marginHorizontal: 5}}
        />
        <View style={styles.infoContainer}>
          <ResponsiveText style={styles.username}>Blair Dota</ResponsiveText>
          <ResponsiveText style={styles.status}>Online</ResponsiveText>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => alert('Call ended')}>
            {Icons.GreenCall()}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => alert('searched')}
            style={styles.searchIconContainer}>
            <Image style={{width:20,height:20}} source={Search}/>
            {/*{Icons.Search({tintColor: '#fff'})}*/}
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    height: wp('28'),
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    // paddingHorizontal: 15,
  },
  backArrowIcon: {
    tintColor: '#bbb',
    height: 30,
    width: 40,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 4.8,
  },
  status: {
    color: '#aaa',
    fontWeight: '200',
    fontSize: 3.5,
  },
  iconsContainer: {
    paddingHorizontal: 8,
    width: wp('20'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchIconContainer: {
    backgroundColor: '#bbb',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: 60,
    padding: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    marginLeft: 10,
  },
});
export default ConversationHeader;
