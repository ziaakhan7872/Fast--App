import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import AppHeader from '../../../components/layout/AppHeader';
import Colors from "../../../theme/colors";
import ResponsiveText from '../../../components/layout/ResponsiveText';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

 const Arr = [
   {
     id:1,
     primaryText:'Enable / Disable Notification',
     secondaryText:'Allow FAST to send you notification',
   },
   {
     id:2,
     primaryText:'Enable / Disable Notification',
     secondaryText:'Allow FAST to send you notification',
   },
 ]
function NotificationSettings(props) {
  const[toggle1,setToggle1]=useState(true)
  const[toggle2,setToggle2]=useState(true)
  return (
    <View style={{flex: 1}}>
      <AppHeader onLeftPress={() => props.navigation.goBack()} />
      <ScrollView style={{backgroundColor: '#EEEFF6', flex: 1}}>
        <View style={styles.notificationContainer}>
          <View style = {{justifyContent:'space-between'}}>
            <ResponsiveText style = {{fontSize:4, fontWeight:'bold', marginBottom:5}}>
              {'Enable / Disable Notification'}</ResponsiveText>
            <ResponsiveText style = {{fontSize:3}}>Allow FAST to send you notifications.</ResponsiveText>
          </View>
          <View style = {{alignSelf:'center'}}>
            <ToggleSwitch
              isOn={toggle1}
              onColor={Colors.Primary}
              offColor='#ccc'
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="medium"
              onToggle={()=>{
                setToggle1(!toggle1)
              }}
            />
          </View>
        </View>
        <View style={[styles.notificationContainer,{borderBottomWidth: 0}]}>
          <View style = {{justifyContent:'space-between'}}>
            <ResponsiveText style = {{fontSize:4.3, fontWeight:'bold', marginBottom:5}}>Email Updates</ResponsiveText>
            <ResponsiveText style = {{fontSize:3.4}}>Allow FAST to send you emails.</ResponsiveText>
          </View>
          <View style = {{alignSelf:'center'}}>
            <ToggleSwitch
              isOn={toggle2}
              onColor={Colors.Primary}
              offColor='#ccc'
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="medium"
              onToggle={()=>{
                setToggle2(!toggle2)
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  notificationContainer:{
    paddingVertical: 15,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomColor:'#ccc',
    alignSelf:'center',
    borderBottomWidth:1,
    width:wp(93)
  }
});
export default NotificationSettings;


