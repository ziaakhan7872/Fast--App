import React, { useEffect, useState } from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ResponsiveText from '../../components/layout/ResponsiveText'
import Container from '../../components/layout/Container'
import Content from '../../components/layout/Content'
import Colors from '../../theme/colors'
import Input from '../../components/layout/Input'
import Icons from '../../theme/icons'
import Button from '../../components/layout/Button'
import { connect } from 'react-redux';
import { loginUser } from "../../redux/actions/authActions"

function Login({ navigation, loginUser, loading,login,loginToken }) {
  const [email, setEmail] = useState('zeekhan7872@gmail.com')
  const [password, setPassword] = useState('4444')
  const [hidden, setHidden] = useState(true)
  const [stayConnected, setStayConnected] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.toLowerCase())) {

      setErrorMessage("Enter Valid Email");

    } else if (password.length === 0) {
      setErrorMessage("Enter Password");

    }
    else {
      setErrorMessage('')
      loginUser({
        email:email.trim(),
        password:password.trim(),
      })
      setEmail('')
      setPassword('')
     //navigation.navigate('GetPremium')
    }
  }
useEffect(()=>{
  if(loginToken) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'GetPremium' },
        ],
      })
    );
  }
})

  const onFacebookLogin = () => {
    navigation.navigate('Tab')
  }

  return (
    <Container style={styles.container}>
      <Content>
        <ScrollView style={styles.content}>
          <View style={styles.topRowContainer}>
            <Image
              source={require('../../assets/icons/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.allfieldsContainer}>
            <ResponsiveText style={styles.allfields}>
              {login ? login: errorMessage}
            </ResponsiveText>
          </View>


          <View style={styles.middleRow}>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(e) => setEmail(e)}
              icon={Icons.Email()}
            />
            <View style={{ position: 'relative', justifyContent: 'center' }}>
              <Input
                placeholder="Password"
                value={password}
                onChangeText={(e) => setPassword(e)}
                icon={Icons.Lock()}
                inputStyle={{ paddingRight: 45 }}
                secureTextEntry={hidden}
              />
              <TouchableOpacity
                onPress={() => setHidden(!hidden)}
                style={{
                  position: 'absolute',
                  right: 15,
                  top: 8,
                  paddingLeft: 8,
                  paddingVertical: 5,
                }}
              >
                {Icons.Eye()}
              </TouchableOpacity>
            </View>
            {/* TODO: save states */}
            <View style={styles.extraContainer}>
              <TouchableOpacity
                style={styles.stayConnectedContainer}
                onPress={() => setStayConnected(!stayConnected)}
              >
                <View
                  style={[
                    styles.checkbox,
                    stayConnected
                      ? { backgroundColor: Colors.Primary, borderWidth: 0 }
                      : null,
                  ]}
                >
                  {stayConnected
                    && Icons.Tick({ height: 12, width: 12, marginTop: 2 })}
                </View>
                <ResponsiveText style={styles.extraText}>
                  Stay Connected
                </ResponsiveText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
               // onPress={() => navigation.navigate('UpdatePassword')}
              >
                <ResponsiveText
                  style={{ ...styles.extraText, color: Colors.Primary }}
                >
                  Forgot Password?
                </ResponsiveText>
              </TouchableOpacity>
            </View>
            
              <Button
               loading={loading}
                title="LOGIN"
                btnContainer={{
                  marginTop: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={onSubmit}
              />
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <ResponsiveText style={styles.or}>OR</ResponsiveText>
              <View style={styles.line} />
            </View>
            <View style={styles.socialBtnContainer}>
              <TouchableOpacity
                style={styles.socialLoginBtn}
                onPress={onFacebookLogin}
              >
                <View style={styles.socialLoginContent}>
                  <View style={styles.socialIconContainer}>
                    {Icons.Facebook({ height: wp('8'), width: wp('7') })}
                  </View>
                  <ResponsiveText style={styles.socialText}>
                    Facebook
                  </ResponsiveText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialLoginBtn}
                onPress={onFacebookLogin}
              >
                <View style={styles.socialLoginContent}>
                  <View style={styles.socialIconContainer}>
                    {Icons.Google({ height: wp('8'), width: wp('7') })}
                  </View>
                  <ResponsiveText style={styles.socialText}>
                    Google
                  </ResponsiveText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialLoginBtn}
                onPress={onFacebookLogin}
              >
                <View style={styles.socialLoginContent}>
                  <View style={styles.socialIconContainer}>
                    {Icons.Twitter({ height: wp('8'), width: wp('7') })}
                  </View>
                  <ResponsiveText style={styles.socialText}>
                    Twitter
                  </ResponsiveText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialLoginBtn}
                onPress={onFacebookLogin}
              >
                <View style={styles.socialLoginContent}>
                  <View style={styles.socialIconContainer}>
                    {Icons.Insta({ height: wp('8'), width: wp('7') })}
                  </View>
                  <ResponsiveText style={styles.socialText}>
                    Instagram
                  </ResponsiveText>
                </View>
              </TouchableOpacity>
              <Button
                btnContainer={styles.goToBasicSignup}
                title="Sign up using email"
                titleStyle={{
                  ...styles.socialText,
                  color: Colors.supportBlack,
                  fontWeight: 'bold',
                }}
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </View>
        </ScrollView>
      </Content>
    </Container>
  )
}


function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
    login:state.auth.login,
    loginToken:state.auth.loginToken?.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (payload) => dispatch(loginUser(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topRowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('60'),
  },
  logo: {
    height: 80,
    width: wp('70'),
    resizeMode: 'contain',
  },
  content: {
    paddingHorizontal: 20,
  },
  allfieldsContainer: {
    justifyContent: 'center',
    bottom: 5
  },
  allfields: {
    color: 'red'
  },
  middleRow: {
    flex: 1,
  },
  bottomRow: {
    flex: 1,
    paddingHorizontal: 4,
    justifyContent: 'center',
    marginBottom: 20,
  },
  extraContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginBottom: 20,
  },
  extraText: {
    color: '#BBB',
    fontSize: 3,
    marginRight: 5,
  },
  stayConnectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#BBB',
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    width: wp('40%'),
    borderWidth: 1,
    backgroundColor: '#6B6B6B',
    height: 0,
    borderRadius: 2,
    opacity: 0.75,
  },
  or: {
    // fontSize: wp('1.1%'),
    fontWeight: 'bold',
    marginHorizontal: 7,
    opacity: 0.75,
  },
  socialBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  socialIconContainer: {
    width: '40%',
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLoginBtn: {
    height: wp('13%'),
    width: wp('45.8') - 15,
    elevation: 2,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  socialLoginContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  socialText: {
    fontWeight: 'bold',
    // fontSize:1.2,
  },
  goToBasicSignup: {
    backgroundColor: Colors.supportWhite,
    elevation: 2,
    width: wp('100') - 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
})
//export default Login
