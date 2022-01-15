import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Keyboard, KeyboardAvoidingView, BackHandler, Platform,Image,TouchableOpacity} from 'react-native';
import ResponsiveText from '../../../components/layout/ResponsiveText';
import CommentDisplay from '../../../components/CommentDisplay';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppHeader from '../../../components/layout/AppHeader';
import {TextInput} from 'react-native-gesture-handler';
import StoryItem from '../../../components/StoryItem';
import Container from '../../../components/layout/Container';
import Content from '../../../components/layout/Content';
import Input from '../../../components/layout/Input';
import send from  '../../../assets/icons/Send.png'

const comments = [
  {
    username: 'janlosert',
    text:
      'Hey guys! Please listent to this and share you views and feedback in the comments section below. Don’t forget to rate me  in you love my voice…',
  },

  {
    username: 'snowgraphs',
    text: '👏👏👏',
  },
  {
    username: 'marcallcock',
    text: 'Awesome! That’s great man!!',
  },
  {
    username: 'firmansananda',
    text: 'Cool mate. 👌🏻',
  },
  {
    username: 'lucasmelk',
    text: 'We expected it to be better',
  },
  {
    username: 'muroadriano',
    text: 'Alright star, we are looking forward to see you tonight… yay!',
  },
  {
    username: 'jleet._',
    text: 'Wow, nice try at damage control.',
  },
  {
    username: 'dwtsrikerI',
    text: 'we will be looking forward…',
  },
  {
    username: 'firmansananda',
    text: 'Cool mate. 👌🏻',
  },
  {
    username: 'lucasmelk',
    text: 'We expected it to be better',
  },
  {
    username: 'muroadriano',
    text: 'Alright star, we are looking forward to see you tonight… yay!',
  },
  {
    username: 'jleet._',
    text: 'Wow, nice try at damage control.',
  },
  {
    username: 'dwtsrikerI',
    text: 'we will be looking forward…',
  },
  {
    username: 'firmansananda',
    text: 'Cool mate. 👌🏻',
  },
  {
    username: 'lucasmelk',
    text: 'We expected it to be better',
  },
  {
    username: 'muroadriano',
    text: 'Alright star, we are looking forward to see you tonight… yay!',
  },
  {
    username: 'firmansananda',
    text: 'Cool mate. 👌🏻',
  },
  {
    username: 'lucasmelk',
    text: 'We expected it to be better',
  },
  {
    username: 'muroadriano',
    text: 'Alright star, we are looking forward to see you tonight… yay!',
  },
  {
    username: 'firmansananda',
    text: 'Cool mate. 👌🏻',
  },
  {
    username: 'lucasmelk',
    text: 'We expected it to be better',
  },
  {
    username: 'muroadriano',
    text: 'Alright star, we are looking forward to see you tonight… yay!',
  },
  {
    username: 'firmansananda',
    text: 'Cool mate. 👌🏻',
  },
  {
    username: 'lucasmelk',
    text: 'We expected it to be better',
  },
  {
    username: 'muroadriano',
    text: 'Alright star, we are looking forward to see you tonight… yay!',
  },
  {
    username: 'jleet._',
    text: 'Wow, nice try at damage control.',
  },
  {
    username: 'dwtsrikerI',
    text: 'we will be looking forward…',
  },
  {
    username: 'emma.elizabethh_',
    text: 'Please change it back',
  },
  {
    username: 'firmansananda',
    text: 'Cool mate. 👌🏻',
  },
  {
    username: 'lucasmelk',
    text: 'We expected it to be better',
  },
  {
    username: 'muroadriano',
    text: 'Alright star, we are looking forward to see you tonight… yay!',
  },
  {
    username: 'firmansananda',
    text: 'Cool mate. 👌🏻',
  },
];

function Comment (props) {
  const [commentsDS, setCommentsDS] = useState(comments)
  const [comment, setComment] = useState('');
  const [commentFoucsed, setCommentFocused] = useState(false);
  let scroll = useRef();
  let textInput=useRef()

  const backPress = ()=>{
    setCommentFocused(false)
    return
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backPress
    );
    return () => backHandler.remove();
  }, []);

  const onSend = () => {
    if (!comment.length) {
      return;
    }

    let temp = commentsDS;
    temp.push({
      username: "Jack S.",
      text: comment
    })
    setCommentsDS([...temp]);
    Keyboard.dismiss()
    // setComment('cool')
  };


  return (
    <Container>
      <AppHeader
        onLeftPress={() => props.navigation.goBack()}
        title={'People who commented'}
      />
      <ScrollView
        style={styles.commentContainer}
        ref={scroll}
        onContentSizeChange={() => scroll.current.scrollToEnd({animated: true})}
      >
        {commentsDS.map((comment, idx) => <CommentDisplay key={idx} comment={comment} {...props.navigation}/>)}
      </ScrollView>

      <KeyboardAvoidingView style={styles.postComments} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <StoryItem
          containerSize={45}
          border={true}
          borderPurple={true}
          uri={"https://picsum.photos/id/455/200/300"}
        />

        <View style={{flex:1,flexDirection: 'row'}}>
          <TextInput
            placeholder='Add a Comment...'
            ref={textInput}
            style={[styles.input, commentFoucsed ? {borderColor: '#0099A2'} : {borderColor: 'transparent'}]}
            onBlur={() => setComment(false)}
            onFocus={() => setCommentFocused(true)}
            value={comment}
            onChangeText={(e)=> setComment(e)}
            // onSubmitEditing={()=>{
            //   console.log('i am caaledd')
            //   onSend()
            //   setComment('')
            // }}
            textAlignVertical={'top'}
            multiline={true }
            // returnKeyType={"return"}
          />
          <TouchableOpacity style={styles.sendIcon} onPress={() => {
            onSend()
            setComment('')
          }}>
            <Image source={send} style={{height: '100%',width: '100%'}} />
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </Container>

  );
}

export default Comment;

const styles = StyleSheet.create({
  commentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 0,
  },
  postComments: {
    paddingHorizontal: 15,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    flex:1,
    borderColor: 'blue',
    borderWidth: 1.5,
    height: hp(13),
    borderRadius: 5,
    padding: 5
  },
  sendIcon : {
    height: wp(6),
    width: wp(6),
    position:'absolute',
    bottom:10,
    right:10,
    zIndex:10
  }
});

