import React, {useState, useRef,useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
    Platform
} from 'react-native';
import ConversationHeader from '../../../components/ConversationHeader';
import ConversationPayload from '../../../components/ConversationPayload';
import Container from '../../../components/layout/Container';
import Icons from '../../../theme/icons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Input from '../../../components/layout/Input';
import EmojiBoard from 'react-native-emoji-board';
import ResponsiveText from '../../../components/layout/ResponsiveText';
import Content from '../../../components/layout/Content';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const conversationData = [
  {
    payload:
      'I thought this would be an awesome way to interact with the interface.',
    type: 'text',
    user: 'A',
  },
  {
    payload: 'I agree! It definitely produces a better user experience.',
    type: 'text',
    user: 'B',
  },
  {
    payload: 'Did you get that awesome sauce I sent?',
    type: 'text',
    user: 'A',
  },
  {
    payload: 'I did, our whole team rubbed it all over their bread.',
    type: 'text',
    user: 'B',
  },
  {
    payload: 'It was delicious!',
    type: 'text',
    user: 'B',
  },
  {
    payload: 'Awesome!',
    type: 'text',
    user: 'A',
  },
  {
    payload: 'Yeah, we all loved it!',
    type: 'text',
    user: 'B',
  },
];

function Conversation(props) {
  const [conversation, setConversation] = useState(conversationData);
  const [messageField, setMessageField] = useState('');
  const [show, setShow] = useState(false);
  const [upload, setUpload] = useState(false);
  let scroll = useRef();

  const onClick = (emoji) => {
    console.warn(emoji);

    setShow(!show);
  };

  const takeImage = () => {
    setUpload(false);
    launchCamera(
      {
        mediaType: 'photo',
        storageOptions: {
          // skipBackup: true,
          // path: 'Pictures/myAppPicture/', //-->this is neccesary
          privateDirectory: true,
        },
      },
      (response) => {
        conversation.push({
          payload: response.uri,
          type: 'image',
          user: 'A',
        });
        setConversation([...conversation]);
      },
    );
  };

  const chooseFromGallery = () => {
    setUpload(false);
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
        storageOptions: {
          // skipBackup: true,
          // path: 'Pictures/myAppPicture/', //-->this is neccesary
          privateDirectory: true,
        },
      },
      (response) => {
        conversation.push({
          payload: response.uri,
          type: 'image',
          user: 'A',
        });

        setConversation([...conversation]);
      },
    );
  };


  return (
    <Container style={styles.container}>
      <ConversationHeader onBackArrow={() => props.navigation.goBack()}  />
      <ScrollView style={styles.conversationContainer} ref={scroll} >
        {conversation.map((item, idx) => {
          return (
            <ConversationPayload
              key={idx}
              other={item.user === 'A'}
              data={item}
            />
          );
        })}
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS ==='ios' ? 'padding' : 'height'} keyboardVerticalOffset = {Platform.OS ==='ios' ? 0 : wp(20)}>
        <View style={styles.inputFieldContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setUpload(!upload);
              }}>
              {Icons.SendMessageLeft(styles.icons)}
            </TouchableOpacity>
            {/*<TouchableOpacity onPress={() => setShow(!show)}>*/}
            {/*  {Icons.Emojis({...styles.icons, marginLeft: 8})}*/}
            {/*</TouchableOpacity>*/}
          </View>
          <Input
            inputStyle={styles.sendMessageInputField}
            placeholder={'Type Something'}
            placeholderTextColor={'#000'}
            onChangeText={(e) => setMessageField(e)}
            value={messageField}
          />
          <TouchableOpacity
            onPress={() => {
              conversation.push({
                payload: messageField,
                type: 'text',
                user: 'A',
              });
              setMessageField('');
              setConversation([...conversation]);
              scroll.current.scrollToEnd()

            }}>
            {Icons.Send({
              height: wp('7'),
            })}
          </TouchableOpacity>
          <EmojiBoard showBoard={show} onClick={(e) => console.warn(e)} />
        </View>
      </KeyboardAvoidingView>
      {upload && (
        <View style={styles.uploadOptionsContainer}>
          <TouchableOpacity
            style={styles.captureOptionItem}
            activeOpacity={0.9}
            onPress={takeImage}>
            <ResponsiveText>Capture Image</ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.captureOptionItem, {borderBottomWidth: 0}]}
            activeOpacity={0.9}
            onPress={chooseFromGallery}>
            <ResponsiveText>Choose from Gallery</ResponsiveText>
          </TouchableOpacity>
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conversationContainer: {
    flex: 1,
    position: 'relative',
  },
  inputFieldContainer: {
    alignSelf: 'flex-end',
    width: wp('100'),
    height: 55,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icons: {
    height: wp('8'),
    width: wp('8'),
  },
  sendMessageInputField: {
    width: wp('80'),
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  uploadOptionsContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: wp('80'),
    borderRadius: 15,
    alignSelf: 'center',
    top: '30%',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  captureOptionItem: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
export default Conversation;
