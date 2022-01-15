import React, { useState } from 'react'
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { BoxShadow } from 'react-native-shadow'
import ResponsiveText from '../../../components/layout/ResponsiveText'
import Container from '../../../components/layout/Container'
import Content from '../../../components/layout/Content'
import AppHeader from '../../../components/layout/AppHeader'
import Icons from '../../../theme/icons'
import Colors from '../../../theme/colors'
import yellowstar from '../../../assets/icons/yellowstar.png'

const filterTypes = ['My Videos', 'Tags']

function Profile(props) {
  const [locationFilterTypeIdx, setLocationFilterTypeIdx] = useState(0)

  const shadowOpt = {
    width: wp(85),
    height: wp(30),
    color: '#F0F0F0',
    border: 10,
    radius: 5,
    opacity: 0.2,
    x: 1,
    y: 1,
    style: { flex: 1 },

  }

  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        onLeftPress={() => props.navigation.goBack()}

        rightIcon={() => (
          <Image
            source={require('../../../assets/icons/gear(1).png')}
            style={{ width: wp('7'), resizeMode: 'contain', tintColor: '#FFF' }}
          />
        )}
        onRightPress={() => props.navigation.navigate('Settings')}
      />
      <Content>
        <ScrollView contentContainerStyle={{ backgroundColor: '#EEEFF6' }}>
          <View style={styles.informationContainer}>
            <View style={styles.profileContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.checkID ? props.navigation.navigate('MyStudio') : props.navigation.navigate('MySongwriter')
                }}
                style={{
                  position: 'absolute',
                  top: 8,
                  zIndex: 100,
                  right: 10,
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                  borderRadius: 5,
                }}
              >
                <ResponsiveText style={{
                  fontSize: 2.5, paddingVertical: 6, paddingHorizontal: 10, color: Colors.Primary,
                }}
                >
                  {props.checkID ? 'My Studio' : 'My Songwriter'}
                </ResponsiveText>
              </TouchableOpacity>
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
              <ResponsiveText style={{ color: '#77869E' }}>
                ricardojoseph@gmail.com
              </ResponsiveText>
              <TouchableOpacity
                onPress={() => { props.navigation.navigate('Reviews') }}
                style={styles.starImageView}
              >
                {[...Array(4)].map((item, index) => {
                  return (
                    <Image key={index} source={yellowstar} style={{ height: 20, width: 20 }} />
                  )
                })}
                <Image source={yellowstar} style={{ height: 20, width: 20, tintColor: 'lightgrey' }} />
                <ResponsiveText style={{ fontSize: 2.5, fontWeight: 'bold', marginLeft: 5 }}>(23)</ResponsiveText>
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <BoxShadow setting={shadowOpt}>
                  <View style={styles.descriptionContainer}>
                    <View style={{
                      flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderColor: 'lightgrey', paddingBottom: 10,
                    }}
                    >
                      <View style={{
                        flex: 1,
                        alignItems: 'center',
                        borderRightWidth: 1,
                        borderColor: 'lightgrey',
                      }}
                      >
                        <ResponsiveText style={{ fontWeight: 'bold' }}>19.2k</ResponsiveText>
                        <ResponsiveText style={{ fontSize: 3.2, paddingTop: 5 }}>Followers</ResponsiveText>
                      </View>
                      <View style={{
                        flex: 1,
                        alignItems: 'center',
                        borderRightWidth: 1,
                        borderColor: 'lightgrey',
                      }}
                      >
                        <ResponsiveText style={{ fontWeight: 'bold' }}>13.7k</ResponsiveText>
                        <ResponsiveText style={{ fontSize: 3.2, paddingTop: 5 }}>Following</ResponsiveText>
                      </View>
                      <View style={{ alignItems: 'center', flex: 1 }}>
                        <ResponsiveText style={{ fontWeight: 'bold' }}>25</ResponsiveText>
                        <ResponsiveText style={{ fontSize: 3.2, paddingTop: 5 }}>Posts</ResponsiveText>
                      </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <ResponsiveText style={{ color: '#77869E', fontSize: 3.2, paddingTop: 8 }}>
                        Hi, I’m Richard, a song writer and an artist, I am here to
                        show my talent to the world and let people know more about
                        me.
                      </ResponsiveText>
                    </View>
                  </View>

                </BoxShadow>
              </View>
            </View>
          </View>

          <View style={styles.filterContainer}>
            {filterTypes.map((item, idx) => {
              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => setLocationFilterTypeIdx(idx)}
                  style={[
                    styles.filterItem,
                    idx === locationFilterTypeIdx
                      ? styles.filterTypeActive
                      : null,
                  ]}
                >
                  <ResponsiveText
                    style={[
                      styles.filterText,
                      idx === locationFilterTypeIdx ? { color: '#FFF' } : null,
                    ]}
                  >
                    {item}
                  </ResponsiveText>
                </TouchableOpacity>
              )
            })}
          </View>

          <View style={styles.galleryContainer}>
            {['', '', '', '', '', ''].map((item, idx) => {
              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => props.navigation.navigate('HomeStack')}
                >
                  <Image
                    key={idx}
                    style={styles.galleryImage}
                    source={{
                      uri: `https://picsum.photos/id/${Math.floor(
                        Math.random() * Math.floor(45),
                      )}/200/300`,
                    }}
                  />
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </Content>
    </View>
  )
}
const styles = StyleSheet.create({
  informationContainer: {
    height: wp('100'),
    padding: 20,
    paddingBottom: 15,
    backgroundColor: '#EEEFF6',
    marginTop: 15,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    height: wp(50),
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
    marginTop: 15,
  },
  username: {
    marginHorizontal: 8,
    fontSize: 4,
    color: '#77869E',
    fontWeight: 'bold',
  },
  descriptionContainer: {
    paddingTop: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    width: wp(85),
    height: wp(28),
    backgroundColor: 'white',
  },
  starImageView: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  filterContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    width: wp('100') - 40,
    height: 45,
    elevation: 2,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  filterItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterText: {
    color: Colors.Primary,
    fontSize: 3,
  },
  filterTypeActive: {
    backgroundColor: Colors.Primary,
    borderRadius: 12,
  },
  galleryContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryImage: {
    width: wp('33%'),
    height: wp('32%'),
    overflow: 'hidden',
    marginBottom: wp('.3%'),
  },
})
export default Profile
