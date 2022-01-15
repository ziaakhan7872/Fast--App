import React from 'react'
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Content from '../../../components/layout/Content'
import ResponsiveText from '../../../components/layout/ResponsiveText'
import Colors from '../../../theme/colors'
import Icons from '../../../theme/icons'
import Review from '../../../components/Review'
import Button from '../../../components/layout/Button'

function StudioDetails(props) {
  const { item, latitude, longitude } = props.route.params

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent barStyle="dark-content" />
      <Content>
        <ScrollView>
          <Image
            source={item.image}
            style={styles.studioImage}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              position: 'absolute',
              top: 40,
              left: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 8,
              backgroundColor: 'rgba(0,0,0,0.8)',
            }}
            onPress={() => props.navigation.goBack()}
          >
            {Icons.HeaderBackArrow({ tintColor: '#fff' })}
          </TouchableOpacity>
          <View style={styles.content}>
            <View style={styles.headingContainer}>
              <ResponsiveText style={styles.headingText}>
                Dreamland Studio
              </ResponsiveText>
              <ResponsiveText style={styles.headingText}>$450/d</ResponsiveText>
            </View>
            <ResponsiveText style={styles.addressStyle}>
              Complete day recording and all instruments
            </ResponsiveText>
            <View style={styles.lineBreak} />
            <TouchableOpacity onPress={() => { props.navigation.navigate('StudioMaps', { item, latitude, longitude }) }}>
              <Image
                source={require('../../../assets/images/map.png')}
                style={styles.mapImg}
              />
            </TouchableOpacity>

            <View style={[styles.headingContainer, { marginBottom: 10 }]}>
              <ResponsiveText style={{ ...styles.location, color: '#363636' }}>
                Location
              </ResponsiveText>
              <View style={{ width: wp('70'), alignItems: 'flex-end' }}>
                <ResponsiveText
                  style={{
                    ...styles.locationText,
                  }}
                >
                  {item.address}
                </ResponsiveText>
              </View>
            </View>
            <View style={styles.lineBreak} />
            <TouchableOpacity style={styles.groupDetails} onPress={() => { props.navigation.navigate('Profile') }}>
              {Icons.PeopleGroup({ height: wp('7'), width: wp('7') })}
              <ResponsiveText style={styles.studioOwner}>
                Studio Owner: Robert Ben
              </ResponsiveText>
            </TouchableOpacity>
            <View style={styles.lineBreak} />
            <View style={[styles.headingContainer, { marginBottom: 5 }]}>
              <TouchableOpacity activeOpacity={0.5}>
                <ResponsiveText style={{ ...styles.addressStyle, color: '#000' }}>
                  Reviews
                </ResponsiveText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { props.navigation.navigate('Reviews') }}
                activeOpacity={0.5}
              >
                <ResponsiveText style={{ ...styles.addressStyle, color: '#000' }}>
                  View All
                </ResponsiveText>
              </TouchableOpacity>
            </View>
            <View style={styles.reviewsContainer}>
              <Review onPress={() => { props.navigation.navigate('Reviews') }} />
              <Review onPress={() => { props.navigation.navigate('Reviews') }} />
            </View>

            <View
              style={[
                styles.headingContainer,
                { marginVertical: 10, alignSelf: 'flex-end' },
              ]}
            >
              <Button
                title="Ask a Question"
                btnContainer={styles.ask}
                titleStyle={{ color: 'black', fontSize: 4.5 }}
                onPress={() => { props.navigation.navigate('Conversation') }}
              />
              <Button
                title="Book now"
                btnContainer={[
                  styles.ask,
                  { marginLeft: 5, backgroundColor: Colors.Primary },
                ]}
                titleStyle={{ fontSize: 4.5 }}
                onPress={() => alert('Book now.')}
              />
            </View>
          </View>
        </ScrollView>
      </Content>
    </View>
  )
}

const styles = StyleSheet.create({
  studioImage: {
    width: wp('100'),
    height: wp('80'),
  },
  content: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 5,
    color: Colors.Primary,
  },
  locationText: {
    fontWeight: 'bold',
    // fontSize: wp('1.2'),
    color: '#363636',
  },
  location: {
    // fontSize: wp('1.2'),
    color: Colors.Primary,
  },
  addressStyle: {
    fontWeight: '300',
    // fontSize: wp('1.05'),
    color: '#bbb',
    marginVertical: 10,
  },
  lineBreak: {
    borderWidth: 0.5,
    borderColor: '#DDD',
  },
  mapImg: {
    height: wp('65'),
    width: wp('100') - 30,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  groupDetails: {
    paddingTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  studioOwner: {
    marginLeft: 15,
    color: '#bbb',
    fontSize: 3.5,
  },
  reviewsContainer: {
    flex: 1,
  },
  ask: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: 'rgba(214,210,210,0.57)',
    opacity: 1,
    borderRadius: 15,
  },
})

export default StudioDetails
