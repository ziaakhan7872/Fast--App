import React, { useState } from 'react';
import Button from '../../components/layout/Button';
import { Image, StyleSheet, View, TouchableOpacity,ActivityIndicator } from 'react-native';
import ResponsiveText from '../../components/layout/ResponsiveText';
import Container from '../../components/layout/Container';
import Content from '../../components/layout/Content';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Input from '../../components/layout/Input';
import Icons from '../../theme/icons';
import AppHeader from "../../components/layout/AppHeader";
import { connect } from 'react-redux';
import { updatePassword } from "../../redux/actions/authActions"

function UpdatePassword({ navigation, updatePassword,loading }) {
  // console.log('updatePassword',updatePassword)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {

    if (password.length === 0) {

      setErrorMessage("Enter Password");

    }
    else if (confirmPassword.length === 0) {

      setErrorMessage("Enter Confirm Password");

    }
    else if (password != confirmPassword) {

      setErrorMessage("Password Doesn't Match");

    }

    else if (password == confirmPassword) {
      setErrorMessage('')
      updatePassword({
        password,
      }, (data) => {
        setErrorMessage(data)
      })
      setPassword('')
      setConfirmPassword('')
     // navigation.navigate('GetPremium')
    }
  }

  return (
    <Container>
      <AppHeader
        onLeftPress={() => navigation.goBack()}
        title={'Forgot Password '}
      />
      <Content >
        <View style={styles.content}>
          <View style={styles.topContainer}>
            <Image
              source={require('../../assets/icons/lock-fp.png')}
              style={styles.lock}
            />
            <ResponsiveText style={styles.description}>
              Success! Please enter your new Password
            </ResponsiveText>
          </View>
          <View style={styles.allfieldsContainer}>
            <ResponsiveText style={styles.allfields}>
              {errorMessage}
            </ResponsiveText>
          </View>
          <View style={styles.inputsContainer}>
            <ResponsiveText style={styles.label}>Password</ResponsiveText>
            <View style={{ position: 'relative', justifyContent: 'center' }}>
              <Input
                inputStyle={styles.inputItem}
                placeholder={'Enter password'}
                value={password}
                secureTextEntry={hidePassword}
                onChangeText={(e) => setPassword(e)}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setHidePassword(!hidePassword)}
                style={{ position: 'absolute', right: 10, padding: 5 }}>
                {Icons.Eye({ tintColor: 'grey' })}
              </TouchableOpacity>
            </View>
            <ResponsiveText style={styles.label}>
              Confirm Password
            </ResponsiveText>
            <View style={{ position: 'relative', justifyContent: 'center' }}>
              <Input
                inputStyle={styles.inputItem}
                placeholder={'re-enter password'}
                value={confirmPassword}
                secureTextEntry={hideConfirmPassword}
                onChangeText={(e) => setConfirmPassword(e)}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
                style={{ position: 'absolute', right: 10, padding: 5 }}>
                {Icons.Eye({ tintColor: 'grey' })}
              </TouchableOpacity>
            </View>
          </View>
         
          <Button
           loading={loading}
            onPress={onSubmit}
            titleStyle={{ fontSize: 4 }}
            title={'Done'}
            btnContainer={{
              height: wp('11%'),
              borderRadius: 5
            }}
          />
        </View>
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
    updatePassword: (payload,resetpassword) => dispatch(updatePassword(payload,resetpassword)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    // height: wp('80'),
  },
  lock: {
    resizeMode: 'contain',
    height: wp('25'),
    width: wp('25'),
  },
  description: {
    color: '#bbb',
    // fontSize: wp('1'),
    marginVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
    textAlign: 'center',
    fontSize: 3.5
  },
  inputsContainer: {
    width: wp('100') - 40,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputItem: {
    width: wp('100') - 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingLeft: 2,
    borderBottomColor: 'rgba(112, 112, 112, .1)',
    color: '#000',
    paddingRight: 40,
    fontSize: wp('3')
  },
  allfieldsContainer: {
    //justifyContent: 'center',
    bottom: 5
  },
  allfields: {
    color: 'red'
  },
  label: {
    opacity: 0.4,
    fontSize: 3,
    marginLeft: 2,
    marginTop: 15,
  },
});
///export default UpdatePassword;
