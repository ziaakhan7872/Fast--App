import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View,Image} from 'react-native';
import Container from '../../../components/layout/Container';
import Content from '../../../components/layout/Content';
import ResponsiveText from '../../../components/layout/ResponsiveText';
import AppHeader from '../../../components/layout/AppHeader';
import Input from '../../../components/layout/Input';
import Icons from '../../../theme/icons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MyBookingCard from '../../../components/MyBookingCard';
import Search from '../../../assets/icons/search.png'

function MyBookings (props) {
  const [search, setSearch] = useState();
  return (
    <Container>
      <AppHeader
        onLeftPress={() => props.navigation.goBack()}
        title={'My Bookings'}
      />
      {/*<Content>*/}
        <View style={styles.container}>
          {/*<View style={{position: 'absolute',top: 30}}>*/}
          {/*  {Icons.Search({*/}
          {/*    tintColor: 'lightgrey', height: wp('5'), width: wp('5')*/}
          {/*  })}*/}
          {/*</View>*/}


          <View style={styles.inputFieldContainer}>
            <View style={{justifyContent:'center'}}>
              <Image style={styles.searchImage}source={Search}/>
            </View>
<View style={{justifyContent:'center',alignItems:'center'}}>
  <Input
      inputStyle={[styles.inputStyle,{width: wp(80)} ]}
      onChangeText={(e) => setSearch(e)}
      value={search}
      placeholderTextColor={'lightgrey'}
      placeholder={'Search...'}
      // iconContainer={{left: 5}}
      // icon={
      //   <TouchableOpacity
      //     style={styles.iconContainer}
      //     activeOpacity={0.5}
      //     onPress={() => {
      //     }}>
      //     {Icons.BackArrow({tintColor: 'grey',height: wp('7'), width: wp('7')})}
      //   </TouchableOpacity>
      // }
  />
</View>

          </View>
          <ResponsiveText style={styles.myBooking}>My Bookings</ResponsiveText>
          <MyBookingCard onPress={()=>{
            props.navigation.navigate('WriteReview')
          }}/>
        </View>
      {/*</Content>*/}
    </Container>
  );
}
const styles = {
  container: {
    flex: 1,
    padding: 12,
    marginHorizontal: 10
  },
    inputFieldContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        paddingHorizontal:10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
  inputStyle: {
      backgroundColor:'#fff',
      marginTop: 5,
      fontSize:15,
  },
  myBooking : {
    color: '#3C5063',
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop: 20
  },
    searchImage:{
        tintColor:'grey',
        width: 20,
        height: 20,
        resizeMode:'contain'
    }
};
export default MyBookings;
