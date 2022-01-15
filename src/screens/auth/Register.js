import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import ResponsiveText from '../../components/layout/ResponsiveText';
import Container from '../../components/layout/Container';
import Content from '../../components/layout/Content';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../theme/colors';
import Input from '../../components/layout/Input';
import Icons from '../../theme/icons';
import Button from '../../components/layout/Button';
import {connect} from 'react-redux';
import {registerUser} from "../../redux/actions/authActions"

function Register({ navigation, registerUser, type, loading,message,registerToken}) {
  const [username, setUsername] = useState('qwerty');
  const [email, setEmail] = useState('zeekhan7872@gmail.com');
  const [password, setPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('password');
  const [phone, setPhone] = useState('+923238847788');
  const [errorMessage, setErrorMessage] = useState('');
  
  const onSubmit = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (username.length === 0) {

      setErrorMessage("Enter Name");

    } else if (!re.test(email.toLowerCase())) {
      setErrorMessage("Enter Valid Email");

    }
    else if (email.length === 0) {

      setErrorMessage('Enter Valid Email');
    }
    else if (password.length == 0) {
      setErrorMessage("Enter Password");
    }
    else if (password != confirmPassword) {
      setErrorMessage("Password Doesn't Match");

    }

    else if (phone.length <= 11) {
      setErrorMessage("Enter Phone Number");
    }
    else {
       setErrorMessage("");
      registerUser({
        username,
        email,
        password,
        confirmPassword,
        phone,
        type
       })
      setUsername('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setPhone('')
  
     // navigation.navigate('Login')
    }
  };
  useEffect(()=>{
    if(registerToken) {
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
  //(data) => {setErrorMessage(data.message)}


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
              {message ? message : errorMessage}
            </ResponsiveText>
          </View>

          <View style={styles.middleRow}>
            <Input
              placeholder={'Username'}
              value={username}
              onChangeText={(e) => setUsername(e)}
              icon={Icons.userProfile()}
            />
            <Input
              placeholder={'Email'}
              value={email}
              onChangeText={(e) => setEmail(e)}
              icon={Icons.Email()}
            />
            <Input
              placeholder={'Password'}
              value={password}
              onChangeText={(e) => setPassword(e)}
              icon={Icons.Lock()}
              secureTextEntry
            />
            <Input
              placeholder={'Confirm Password'}
              value={confirmPassword}
              onChangeText={(e) => setConfirmPassword(e)}
              icon={Icons.Lock()}
              secureTextEntry
            />
            <Input
              placeholder={'Phone Number'}
              value={phone}
              onChangeText={(e) => setPhone(e)}
              icon={Icons.Phone()}
              keyboardType={'numeric'}

            />
              <Button
                loading={loading}
                title={'SIGNUP'}
                btnContainer={{
                  marginTop: 10,
                }}
                onPress={onSubmit}
              />

          </View>
          <View style={styles.bottomRow}>
            <ResponsiveText style={styles.alreadyText}>
              Already have an account?
            </ResponsiveText>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <ResponsiveText
                style={{ ...styles.alreadyText, color: Colors.Primary }}>
                Login
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
}
function mapStateToProps(state) {
  console.log('registerToken',state.auth.registerToken?.token)
  return {
    type: state.auth.type,
    loading: state.auth.loading,
    message:state.auth.error?.message,
    registerToken:state.auth.registerToken?.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (payload) => dispatch(registerUser(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  topRowContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('50'),
  },
  allfieldsContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
    height: wp('10'),
  },
  allfields: {
    color: 'red'
  },
  logo: {
    height: 80,
    width: wp('70'),
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    padding: 15,
    paddingHorizontal: 20,
  },
  middleRow: {
    flex: 1,
  },
  bottomRow: {
    flex: 1,
    marginTop: 110,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,

  },
  indicator: {
    marginTop: 20
  },
  alreadyText: {
    color: '#bbb',
    // fontSize: ,
    marginRight: 3,
  },
});
//export default Register;
