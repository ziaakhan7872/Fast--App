import React from 'react';
import ResponsiveText from './layout/ResponsiveText';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

function CommentDisplay (props) {
  return (
    <View style={{flexDirection:'row', alignItems: 'flex-start', marginVertical:3}} >
      <TouchableOpacity activeOpacity={.9} onPress={() => { props.navigate("ProfileStack")}}>
        <ResponsiveText style={styles.commentBy}>
          {props.comment.username + ' '}
        </ResponsiveText>
      </TouchableOpacity>
      <ResponsiveText style={styles.comment}>
        {props.comment.text}
      </ResponsiveText>
    </View>
  );
}

const styles = StyleSheet.create({
  commentBy: {
    // fontSize: wp('1.1'),
    fontWeight: 'bold',
    flexWrap:'wrap'
    // marginVertical: 3,
  },
  comment: {
    fontSize: 3.5,
    fontWeight: '300',
    alignItems: 'center',
    flexWrap:'wrap',
    flex:1,
    marginTop:3
  },
});
export default CommentDisplay;
