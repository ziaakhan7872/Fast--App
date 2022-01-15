import {
  Image, TouchableOpacity, View, ScrollView,
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import React from 'react'
import ResponsiveText from '../../../../components/layout/ResponsiveText'
import Colors from '../../../../theme/colors'
import Button from '../../../../components/layout/Button'
import AppHeader from '../../../../components/layout/AppHeader'
import Container from '../../../../components/layout/Container'

const OfferCard = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader onLeftPress={() => props.navigation.goBack()} stat onStatClick={() => props.navigation.navigate('DummyScreen')} />
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        {[...Array(5)].map((item, index) => {
          return (
            <View
              key={index}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
                marginTop: 15,
                marginHorizontal: 15,
                borderRadius: wp('2%'),
                backgroundColor: '#fff',
                overflow: 'hidden',
                marginBottom: 5,
              }}
            >
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: 'lightgrey',
              }}
              >
                <View style={{
                  backgroundColor: 'rgba(64,179,185,0.1)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: wp(4),
                  paddingHorizontal: wp(3.5),
                }}
                >
                  <ResponsiveText style={{
                    color: Colors.BtnBackground, textAlign: 'center', fontSize: '5%', fontWeight: 'bold',
                  }}
                  >
                    18
                  </ResponsiveText>
                  <ResponsiveText style={{ fontSize: '3%', color: Colors.Primary }}>Today</ResponsiveText>
                </View>
                <View style={{
                  marginLeft: 10,
                }}
                >
                  <ResponsiveText style={{ fontSize: 3.5, fontWeight: 'bold' }}>
                    John Murphy
                  </ResponsiveText>
                  <ResponsiveText style={{
                    fontSize: 3,
                    color: 'grey',
                  }}
                  >
                    10 Sep,2020 | 12:00 am
                  </ResponsiveText>
                </View>
              </View>

              <ResponsiveText
                numberOfLines={4}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 18,
                  fontSize: 3.2,
                }}
              >
                Hi, I'm looking for a studio to record my new song. I found yours it almost matches everything that I am looking for. Would love to have my song recorded at your studio.
              </ResponsiveText>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Button
                  btnContainer={{
                    width: '50%',
                    backgroundColor: Colors.Primary,
                    marginBottom: 0,
                    height: wp(12),

                  }}
                  titleStyle={{
                    color: 'white',
                    fontSize: 4,
                  }}
                  title="Accept"
                  onPress={() => null}
                />
                <Button
                  btnContainer={{
                    width: '50%',
                    backgroundColor: Colors.supportWhite,
                    marginBottom: 0,
                    height: wp(12),
                    // borderRightWidth: 0.5,
                    // borderTopWidth: 0.5,
                    borderWidth: 0.5,
                  }}
                  titleStyle={{
                    color: 'black',
                    fontSize: 4,
                  }}
                  title="Reject"
                  onPress={() => null}
                />
              </View>

            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default OfferCard
