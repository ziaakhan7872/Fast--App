import React, {useState, useRef, useEffect, createRef} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, StatusBar,ActivityIndicator} from 'react-native';
import Button from '../../components/layout/Button';
import ResponsiveText from '../../components/layout/ResponsiveText';
import Container from '../../components/layout/Container';
import Content from '../../components/layout/Content';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Input from '../../components/layout/Input';
import {BoxShadow} from 'react-native-shadow';
import Colors from '../../theme/colors';
import AppHeader from "../../components/layout/AppHeader";
import { connect } from 'react-redux';
import { forgotPasswordCode } from "../../redux/actions/authActions"


function ForgetPasswordEnterCode({navigation,loading,forgotPasswordCode}) {
  const input1 = null;
  const input2 = null;
  const input3 = null;
  const input4 = null;

  const [digit, setDigit] = useState([]);
  const [sent, setSent] = useState('Resend Code');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // input1.current.focus();
  }, []);

  const enterValue = (value, idx) => {
    digit[idx] = value;
    setDigit(...[digit]);
  };

  const shadowOpt = {
    width: wp('14.5'),
    height: wp('12'),
    color: '#0099A2',
    border: 6,
    radius: 3,
    opacity: 0.2,
    x: 1,
    y: 1,
    style: {marginVertical: 0},
  };

  const onSubmit = () => {
    console.log('click')
   
    if (digit.length === 0) {

      setErrorMessage("Enter Code");
    }
    else {
      setErrorMessage('')
      forgotPasswordCode({
        digit: digit.join("")
      },(data) => {
        setErrorMessage(data)
      })

      //setDigit('')

      navigation.navigate('UpdatePassword');
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor={'black'} barStyle={'dark-content'} />
      <AppHeader
          onLeftPress={() =>navigation.goBack()}
          title={'Forgot Password '}
      />
      <Content>
        <View style={styles.content}>
          <View style={styles.topContainer}>
            <Image
              source={require('../../assets/icons/lock-fp.png')}
              style={styles.lock}
            />
            <View style={styles.allfieldsContainer}>
            <ResponsiveText style={styles.allfields}>
              {errorMessage}
            </ResponsiveText>
          </View>
            <ResponsiveText style={styles.description}>
              Enter 4 digit number that sent to your email.
            </ResponsiveText>
          </View>
          <View style={styles.inputsContainer}>
            <BoxShadow setting={shadowOpt}>
              <Input
                inputStyle={styles.inputItem}
                placeholder={''}
                value={digit[0]}
                keyboardType={'numeric'}
                onChangeText={(e) => enterValue(e, 0)}
                clearTextOnFocus={true}
                // ref={input1}
              />
            </BoxShadow>
            <BoxShadow setting={shadowOpt}>
              <Input
                inputStyle={styles.inputItem}
                placeholder={''}
                value={digit[1]}
                keyboardType={'numeric'}
                onChangeText={(e) => enterValue(e, 1)}
                clearTextOnFocus={true}
                // ref={input2}
              />
            </BoxShadow>
            <BoxShadow setting={shadowOpt}>
              <Input
                inputStyle={styles.inputItem}
                placeholder={''}
                value={digit[2]}
                keyboardType={'numeric'}
                onChangeText={(e) => enterValue(e, 2)}
                clearTextOnFocus={true}
                // ref={input3}
              />
            </BoxShadow>
            <BoxShadow setting={shadowOpt}>
              <Input
                inputStyle={styles.inputItem}
                placeholder={''}
                value={digit[3]}
                keyboardType={'numeric'}
                onChangeText={(e) => enterValue(e, 3)}
                clearTextOnFocus={true}
                // ref={input4}
              />
            </BoxShadow>
          </View>
        
          <Button
            // onPress={() => {
            //   navigation.navigate('UpdatePassword');
            // }}
            loading={loading}
            onPress={onSubmit}
            title={'DONE'}
          />
          <ResponsiveText style={styles.extra}>
            Resend code in 0:30
          </ResponsiveText>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setSent('Sent!');
              setTimeout(() => {
                setSent('Resend Code');
              }, 30000);
            }}>
            <ResponsiveText
              style={{
                ...styles.extra,
                color: Colors.Primary,
              }}>
              {sent}
            </ResponsiveText>
          </TouchableOpacity>
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
    forgotPasswordCode: (payload,code) => dispatch(forgotPasswordCode(payload,code)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordEnterCode);
const styles = StyleSheet.create({
  inputShadow: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'pink',
    shadowOpacity: 1,
    elevation: 3,
    zIndex: 999,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    height: wp('80'),

  },
  allfieldsContainer: {
    justifyContent: 'center',
    bottom:5
  },
  allfields: {
    color: 'red'
  },
  inputItem: {
    width: wp('15'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
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
    fontWeight: 'bold',
  },
  extra: {
    color: '#000',
    // fontSize: wp('1.2'),
    marginVertical: 5,
    paddingHorizontal: 15,
    // marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputsContainer: {
    flexDirection: 'row',
    width: wp('100') - 40,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});
//export default ForgetPasswordEnterCode;
