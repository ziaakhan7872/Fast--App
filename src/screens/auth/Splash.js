import React, { useEffect, useState } from 'react'
import {
  StyleSheet, StatusBar, View, Image, Animated,
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import ProgressBarAnimated from 'react-native-progress-bar-animated'
import ResponsiveText from '../../components/layout/ResponsiveText'
import Container from '../../components/layout/Container'
import Content from '../../components/layout/Content'
import { connect } from 'react-redux';

function Splash({ navigation,loginToken }) {
 // console.log('loginToken from splash',loginToken)
  const [progress, setProgress] = useState(0)
  const anim = new Animated.Value(0)
  useEffect(() => {
    // if (progress < 100) {
    //   setTimeout(() => {
    //     setProgress(progress + 10);
    //   }, 500);
    // } else {
    //   //
    // }

    onAnimate()
  }, [])

  const onAnimate = () => {
    anim.addListener(({ value }) => {
      setProgress(parseInt(value))
    })
    Animated.timing(anim, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false, // Add This line
    }).start(() => {
      navigation.navigate('ChoiceNavigator')
    })
  }

  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Content keyboardAvoidingView>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/icons/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.progressBarContainer}>
          <LinearGradient
            colors={['#009C9F', '#008BA9', '#0075B6']}
            style={[
              styles.progressBar,
              { width: `${progress}%`, backgroundColor: '#008BA9' },
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.6, y: 0.0 }}
          />
        </View>
        <ResponsiveText style={styles.loading}>Loading</ResponsiveText>
      </Content>
    </Container>
  )
}

function mapStateToProps(state) {
  //console.log('state.auth.loginToken?.token',state.auth.loginToken?.token)
 
 return {
   
   loginToken:state.auth.loginToken?.token
 }
}


export default connect(mapStateToProps)(Splash);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    width: wp('80%'),
    height: 8,
    borderRadius: 15,
    backgroundColor: '#D8D8D8',
    position: 'relative',
    marginVertical: 10,
  },
  progressBar: {
    height: 8,
    width: '100%',
    borderRadius: 15,
  },
  loading: {
    color: '#bbb',
    fontSize: wp('.8%'),
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  logo: {
    height: 80,
    width: wp('70'),
    resizeMode: 'contain',
  },
})
//export default Splash
