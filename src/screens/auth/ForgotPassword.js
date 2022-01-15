import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard,ActivityIndicator } from 'react-native';
import Container from '../../components/layout/Container';
import Content from '../../components/layout/Content';
import Input from '../../components/layout/Input';
import Icons from '../../theme/icons';
import Button from '../../components/layout/Button';
import ResponsiveText from '../../components/layout/ResponsiveText';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppHeader from '../../components/layout/AppHeader';
import { connect } from 'react-redux';
import { forgotPassword } from "../../redux/actions/authActions"

function ForgotPassword({ navigation, forgotPassword,loading }) {
  const [email, setEmail] = useState('zeekhan7872@gmail.com');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.toLowerCase())) {

      setErrorMessage("Enter Valid Email");
    }
    else {
      setErrorMessage('')
      forgotPassword({
        email,
      }, (data) => {
        setErrorMessage(data)
      })
      setEmail('')
      navigation.navigate('ForgetPasswordEnterCode');
    }
  }
  return (
    <Container>
      <AppHeader
        onLeftPress={() => navigation.goBack()}
        title={'Forgot Password'}
      />
      <Content keyboardAvoidingView>
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>

          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Image
                source={require('../../assets/icons/lock-fp.png')}
                style={styles.lock}
              />
              <ResponsiveText style={styles.description}>
                Please enter you registered email id to receive verification code
                for password reset.
            </ResponsiveText>
            </View>
            <View style={styles.allfieldsContainer}>
            <ResponsiveText style={styles.allfields}>
              {errorMessage}
            </ResponsiveText>
          </View>
            <View style={styles.bottomContainer}>
              <Input
                placeholder={'example@email.com'}
                value={email}
                onChangeText={(e) => setEmail(e)}
                inputStyle={styles.input}
              />
              
              <Button
               loading={loading}
                title={'Confirm'}
                onPress={onSubmit}
                titleStyle={{ fontSize: 4 }}
                btnContainer={{
                  height: wp('11%'),
                  borderRadius: 5
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Content>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    forgotPassword: (payload) => dispatch(forgotPassword(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  lock: {
    resizeMode: 'contain',
    height: wp('25'),
    width: wp('25'),
  },
  allfieldsContainer: {
    justifyContent: 'center',
    bottom:5
  },
  allfields: {
    color: 'red'
  },
  bottomContainer: {
    flex: 1,
  },
  description: {
    color: '#BBB',
    marginVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
    textAlign: 'center',
    fontSize: 3.5
  },
  input: {
    height: wp('11%'),
    backgroundColor: '#fff',
    borderColor: "#BBB",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  }
});

//export default ForgotPassword;
