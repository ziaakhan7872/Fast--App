import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import AppHeader from '../../../components/layout/AppHeader';
import Colors from '../../../theme/colors';
import ResponsiveText from '../../../components/layout/ResponsiveText';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Button from '../../../components/layout/Button';
import Content from '../../../components/layout/Content';

function PrivacySettings (props) {
  const [toggle, setToggle] = useState(true);
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');

  return (
    <View style={{flex: 1}}>
      <AppHeader onLeftPress={() => props.navigation.goBack()}/>
      <Content  style={{backgroundColor: '#EEEFF6', flex: 1}}>
        <View style={styles.notificationContainer}>
          <View style={{justifyContent: 'space-between'}}>
            <ResponsiveText style={{fontSize: 4.3, fontWeight: 'bold', marginBottom: 5}}>Enable
              Location</ResponsiveText>
            <ResponsiveText style={{fontSize: 3.4}}>Allow FAST to access your location</ResponsiveText>
          </View>
          <View style={{alignSelf: 'center'}}>
            <ToggleSwitch
              isOn={toggle}
              onColor={Colors.Primary}
              offColor='#ccc'
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="medium"
              onToggle={() => {
                setToggle(!toggle);
              }}
            />
          </View>
        </View>
        <View style={styles.updatePassword}>
          <ResponsiveText style={{fontSize: 4.3, fontWeight: 'bold', marginBottom: wp(2)}}>Update
            Password
          </ResponsiveText>
          <View style={{marginTop: wp(5)}}>
            <ResponsiveText style={{fontSize: 3.4, color: '#CCCDDE'}}>Old Password</ResponsiveText>
            <TextInput
              style={{height: 40, borderBottomWidth: 1, borderBottomColor: '#CCCDDE'}}
              onChangeText={e => setOldPassword(e)}
              value={oldPassword}
              placeholder="****************"
              secureTextEntry={true}
            />
          </View>
          <View style={{marginTop: wp(5)}}>
            <ResponsiveText style={{fontSize: 3.4, color: '#CCCDDE'}}>New Password</ResponsiveText>
            <TextInput
              style={{height: 40, borderBottomWidth: 1, borderBottomColor: '#CCCDDE'}}
              onChangeText={e => setNewPassword(e)}
              value={newPassword}
              placeholder="****************"
              secureTextEntry={true}
            />
          </View>
          <View style={{marginTop: wp(5)}}>
            <ResponsiveText style={{fontSize: 3.4, color: '#BBB'}}>Confirm New Password</ResponsiveText>
            <TextInput
              style={{height: 40, borderBottomWidth: 1, borderBottomColor: '#CCCDDE'}}
              onChangeText={e => setConfirmNewPassword(e)}
              value={confirmNewPassword}
              placeholder="****************"
              secureTextEntry={true}
            />
          </View>

        </View>
        <View style={{height:wp("25"),justifyContent:'flex-end', alignItems:'center'}}>
          <Button
            title={'Save'}
            titleStyle={{fontWeight:'bold', fontSize: 4}}
            onPress={() => props.navigation.navigate('Register')}
            btnContainer={{backgroundColor: Colors.Primary, height: wp('11')}}
          />
        </View>
      </Content>

    </View>
  );
}
const styles = StyleSheet.create({
  notificationContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#A09E9E',
    alignSelf: 'center',
    borderBottomWidth: 1,
    width: wp(93),
  },
  updatePassword: {
    paddingTop:15,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width:wp(93)
  },
});
export default PrivacySettings;
