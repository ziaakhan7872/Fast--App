import React from 'react';
import {StyleSheet, View, Image,TouchableOpacity} from 'react-native';
import ResponsiveText from './layout/ResponsiveText';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icons from '../theme/icons';
function Review(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://picsum.photos/id/${845}/200/300`,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <ResponsiveText style={styles.username}>Ben Willer</ResponsiveText>
        <ResponsiveText style={styles.review}>
          Had really an amazing experience at this studio.
        </ResponsiveText>
      </View>
      <TouchableOpacity
          onPress={props.onPress}
          style={styles.starsContainer}>
        {Icons.RatingStar({tintColor: '#FFC107', marginRight: 1})}
        {Icons.RatingStar({tintColor: '#FFC107', marginRight: 1})}
        {Icons.RatingStar({tintColor: '#FFC107', marginRight: 1})}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingVertical:5
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: 12,
  },
  username: {
    color: '#bbb',
    fontWeight: 'bold',
    opacity: 0.7,
    // fontSize: wp('1.1'),
  },
  review: {
    color: '#000',
    fontSize:3,
    marginRight: 5
  },
  starsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default Review;
