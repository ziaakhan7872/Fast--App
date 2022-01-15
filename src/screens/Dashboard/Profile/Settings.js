import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import ResponsiveText from '../../../components/layout/ResponsiveText';
import Container from '../../../components/layout/Container';
import Content from '../../../components/layout/Content';
import AppHeader from '../../../components/layout/AppHeader';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icons from '../../../theme/icons';
import SettingsItem from '../../../components/SettingsItem';
import yellowstar from "../../../assets/icons/yellowstar.png";
import {BoxShadow} from "react-native-shadow";

function Settings(props) {
  const shadowOpt = {
    width:wp(85),
    height:wp(28),
    color:"#F0F0F0",
    border:20,
    radius:5,
    opacity:.3,
    x: 1,
    y: 1,

  }
  return (
    <View style={{flex: 1}}>
      <AppHeader onLeftPress={() => props.navigation.goBack()} />
      <ScrollView style={{backgroundColor: '#EEEFF6', flex: 1}}>
        <View style={{padding: 10}}>
          <View style={styles.informationContainer}>
            <View style={styles.profileContainer}>
              <View style={styles.dpContainer}>
                <Image
                    style={styles.profileImage}
                    source={{
                      uri:
                          'https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8',
                    }}
                />
              </View>
              <View style={styles.usernameContainer}>
                <ResponsiveText style={styles.username}>
                  Richard Joseph
                </ResponsiveText>
                {Icons.Verified()}
              </View>
              <ResponsiveText style={{color: '#77869E'}}>
                ricardojoseph@gmail.com
              </ResponsiveText>
              <TouchableOpacity
                  onPress={()=>{props.navigation.navigate('Reviews')}}
                  style={styles.starImageView}>
                {[...Array(4)].map((item, index) => {
                  return (

                      <Image key={index} source={yellowstar} style={{height: 20,width: 20,tintColor: '#FFC107'}} />


                  );
                })}
                <Image source={yellowstar} style={{height: 20,width: 20,tintColor: 'lightgrey'}} />
                <ResponsiveText style={{fontSize: 2.5,fontWeight: 'bold',marginLeft: 5}}>(23)</ResponsiveText>
              </TouchableOpacity>
              <BoxShadow setting={shadowOpt}>
                <View style={styles.descriptionContainer}>
                  <ResponsiveText style={{color: '#77869E'}}>
                    Hi, I’m Richard, a song writer and an artist, I am here to
                    show my talent to the world and let peo- ple know more about
                    me.
                  </ResponsiveText>
                </View>
              </BoxShadow>
            </View>
          </View>

          <ResponsiveText style={styles.gen}>GENERAL</ResponsiveText>
          <View>
            <SettingsItem
                icon={require('../../../assets/icons/notification.png')}
                onPress={()=> props.navigation.navigate('ProfileSettings')}
                heading={'Profile Settings'}
                subHeading={'Change your profile settings'}
            />
            <SettingsItem
              icon={require('../../../assets/icons/privacy.png')}
              onPress={() => props.navigation.navigate('PrivacySettings')}
              heading={'Privacy'}
              subHeading={'Change your password'}
            />
            <SettingsItem
              icon={require('../../../assets/icons/notification.png')}
              onPress={()=> props.navigation.navigate('NotificationSettings')}
              heading={'Notifications'}
              subHeading={'Change your notification settings'}
            />


            {/*<SettingsItem*/}
            {/*    icon={require('../../../assets/icons/notification.png')}*/}
            {/*    onPress={()=> props.navigation.navigate('WriteReview')}*/}
            {/*    heading={'Write Reviews'}*/}
            {/*    subHeading={'Write your Review Here'}*/}
            {/*/>*/}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  informationContainer: {
    height: wp('85'),
    padding: 20,
    paddingBottom: 20,
    backgroundColor: '#EEEFF6',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 80,
    width: 80,
    overflow: 'hidden',
    borderRadius: 10,
  },
  dpContainer: {
    marginTop: 25,
    height: 95,
    width: 95,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  username: {
    marginHorizontal: 8,
    fontSize: 4,
    color: '#77869E',
    fontWeight: 'bold'
  },
  descriptionContainer: {
    width: wp(84.8),
    padding: 15,
    alignItems: 'center',
    flexWrap: 'wrap',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    backgroundColor: 'white'
  },
  starImageView : {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13
  },
  gen: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
export default Settings;
