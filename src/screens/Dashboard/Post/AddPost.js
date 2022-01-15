import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Animated,
  Platform,
  KeyboardAvoidingView,
    Text
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import ResponsiveText from '../../../components/layout/ResponsiveText';
import AppHeader from '../../../components/layout/AppHeader';
import ProgressCircle from 'react-native-progress-circle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../../components/layout/Input';
import Icons from '../../../theme/icons';
import Video from "react-native-video";

function AddPost({navigation}) {
  const [isRecording, setIsRecording] = useState(false);
  let [radius, setRadius] = useState(0);
  let [videoMade, setVideoMade] = useState(false);
  let [description, setDescription] = useState('');
  const [showInstruction, setShowInstruction] = useState(true);
  const[videoUrl,setVideoUrl]=useState('')
  const[videoStopped,setVideoStopped]=useState(false)
  let camera = useRef(null);


  const recordOptions = {
    mute: false,
    maxDuration: 100,
    quality: RNCamera.Constants.VideoQuality['720p'],
  };

  useEffect(() => {
    navigation.addListener('didBlur', (payload) => {
      setVideoMade(false);
    });
    if (showInstruction) {
      setTimeout(() => {
        setShowInstruction(false);
      }, 5000);
    }
    if (isRecording) {
      setTimeout(() => {
        setRadius(radius + 1);
      }, 1000);
    }
  }, [isRecording, radius]);

  // useEffect(() =>{
  // },[])

  const takeVideo = async () => {
    if (camera && !isRecording) {
      try {
        const promise = camera.recordAsync(recordOptions);
        if (promise) {
          setIsRecording(true);
          const data = await promise;
          console.log('takeVideo', data.uri);
          setVideoUrl(data.uri)
          setVideoStopped(true)
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const stopVideo = async () => {
    // console.warn('stop');
    setVideoMade(true);
    await camera.stopRecording();
    setIsRecording(false);
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <AppHeader />
          <View style={{flex: 1}}>
            {videoStopped ? (
                <Video
                    // paused={paused}
                    source={{
                      uri: videoUrl
                    }}
                    onBuffer={() => {}}
                    onError={() => {}}
                    resizeMode="stretch"
                    repeat={true}
                    style={{height: '100%',width: '100%',position: 'absolute'}}
                />
            ) : <RNCamera
                ref={(ref) => {
                  camera = ref;
                }}
                style={{
                  // flex: 1,
                  position: 'absolute',
                  top: Platform.OS === "ios" ? 0 : 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  // height: hp('83'),
                }}
                type={'back'}
                flashMode={'off'}
                autoFocus={'on'}
                zoom={0}
                whiteBalance={'auto'}
                ratio={'16:9'}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
            />
            }
            <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
            <View style={styles.content}>
              <View style={styles.tagContainer}>
                {videoStopped ? null : <View style={styles.tag}>
                  <ResponsiveText style={{color: '#fff'}}>REC</ResponsiveText>
                </View>}
                {videoStopped ? null : <View style={styles.tag}>
                  <Animated.Text
                      style={{
                        fontSize: wp('4'),
                        color: '#fff',
                        // marginTop: 10,
                      }}>
                    {radius}
                  </Animated.Text>
                </View>}
              </View>
              <View style={[styles.borderRecord]}>
                {showInstruction && (
                  <View style={styles.fadeTake}>
                    <ResponsiveText style={{color: '#FFF'}}>
                      Press and hold the + button to record your video
                    </ResponsiveText>
                  </View>
                )}
                {!videoMade && (
                  <ProgressCircle
                    percent={radius}
                    radius={35}
                    borderWidth={1}
                    color="#242424"
                    shadowColor="#bbb"
                    bgColor="transparent">
                    <TouchableWithoutFeedback
                      activeOpacity={0.8}
                      onPress={() => takeVideo()}
                      onLongPress={() => takeVideo()}
                      onPressOut={() => stopVideo()}>
                      <View style={styles.recordBtnContainer} />
                    </TouchableWithoutFeedback>
                  </ProgressCircle>
                )}
                {videoMade && (

                  <View style={styles.videoDescription}>
                    <Input
                      returnKeyType={"done"}
                      inputStyle={styles.description}
                      value={description}
                      onChangeText={() => {
                        setDescription();
                      }}
                      placeholder={'Write description here...'}
                      multiline={true}
                      textAlignVertical={'top'}
                      onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Enter') {
                          Keyboard.dismiss();
                        }
                      }}
                    />
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('HomeStack');
                          setVideoMade(false);
                        }}
                        activeOpacity={0.9}>
                        {Icons.PushPost({
                          height: 40,
                          width: 40,
                        })}
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            </View>
            </TouchableWithoutFeedback>
          </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  tagContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  tag: {
    backgroundColor: '#434343',
    padding: 5,
    borderRadius: 8,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  borderRecord: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  recordBtnContainer: {
    height: 60,
    width: 60,
    borderRadius: 70,
    backgroundColor: '#FFF',
  },
  description: {
    width: wp('80'),
    // height: wp('25'),
    padding: 10,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
    paddingTop: 15,
  },
  videoDescription: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 5,
    borderRadius: 10,
    height: wp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fadeTake: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 5,
  },
});
export default AddPost;
