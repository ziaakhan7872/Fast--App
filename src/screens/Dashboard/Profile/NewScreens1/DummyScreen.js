import React, { useState, useRef, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'
import AppHeader from '../../../../components/layout/AppHeader'
import Button from '../../../../components/layout/Button'
import Colors from '../../../../theme/colors'
import Container from '../../../../components/layout/Container'
import CircleAnalytics from '../../../../components/CircleAnalytics'
import ConfirmedCard from '../../../../components/ConfirmedCard'
import ResponsiveText from '../../../../components/layout/ResponsiveText'
import StarCard from '../../../../components/starCard'
import Graph from '../../../../components/Graph'
import WorldMap from '../../../../components/DominationMap'

function DummyScreen(props) {
  const [dateSelected, setDateSelected] = useState({ [moment(new Date()).format('YYYY-MM-DD')]: { selected: true, selectedColor: '#0D8991' } })
  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    setRendered(true)
  }, [])
  console.log('<<<', dateSelected)

  return (
    <Container style={{ flex: 1 }}>
      <AppHeader onLeftPress={() => props.navigation.goBack()} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginTop: wp(5), flex: 1, paddingHorizontal: wp(5) }}>
          <Button
            btnContainer={{
              backgroundColor: Colors.supportWhite, elevation: 8,
            }}
            titleStyle={{
              color: Colors.Primary, fontWeight: 'normal',
            }}
            title="Analytics"
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(4) }}>
            <CircleAnalytics day="Weekly" price="$1.3k" />
            <CircleAnalytics day="Monthly" price="$1.5k" />
            <CircleAnalytics day="Weekly" price="$2.7k" />
          </View>
          <Button
            btnContainer={{
              backgroundColor: Colors.supportWhite, elevation: 8, marginVertical: wp(8),
            }}
            titleStyle={{
              color: Colors.Primary, fontWeight: 'normal',
            }}
            title="Bookings"
          />
          <View style={{ marginTop: wp(4) }}>
            <Calendar
              onDayPress={(day) => {
                setDateSelected({ [day.dateString]: { selected: true, selectedColor: '#0D8991' } })
              }}
            // current={newDate}
              hideArrows
              markedDates={dateSelected}
              hideExtraDays
              hideDayNames
              disableArrowLeft
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                selectedDayTextColor: 'white',
                todayTextColor: 'black',
                dayTextColor: 'black',
              }}
              renderHeader={(date) => {
                return (
                  <View />
                )
              }}
            />
          </View>
          <ConfirmedCard />
          <Button
            btnContainer={{
              backgroundColor: Colors.supportWhite, elevation: 8, marginVertical: wp(6),
            }}
            titleStyle={{
              color: Colors.Primary, fontWeight: 'normal',
            }}
            title="Ratings"
          />
          <View style={{ flexDirection: 'row', marginTop: wp(8) }}>
            <View style={{ marginRight: wp(19) }}>
              <ResponsiveText style={styles.ratingText}>4.3</ResponsiveText>
              <ResponsiveText style={styles.outOfText}>out of 5</ResponsiveText>
            </View>
            <View style={{ position: 'absolute', right: 0, bottom: 0 }}>
              <ResponsiveText>25 Ratings</ResponsiveText>
            </View>
            <StarCard />

          </View>
          <Button
            btnContainer={{
              backgroundColor: Colors.supportWhite, elevation: 8, marginVertical: wp(6),
            }}
            titleStyle={{
              color: Colors.Primary, fontWeight: 'normal',
            }}
            title="Ad Spending"
          />

          <View style={{ flexDirection: 'row', marginTop: wp(8), marginBottom: wp(5) }}>
            <View style={{
              flex: 1, alignItems: 'center', borderRightWidth: 0.5, borderColor: 'grey',
            }}
            >
              <ResponsiveText style={{ fontSize: wp(1.5) }}>$12,297</ResponsiveText>
              <ResponsiveText style={{ fontSize: wp(0.8), color: 'grey' }}>November</ResponsiveText>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <ResponsiveText style={{ fontSize: wp(1.5), color: Colors.Primary }}>+$1.4k</ResponsiveText>
              <ResponsiveText style={{ fontSize: wp(0.8), color: 'grey' }}>from previous month</ResponsiveText>
            </View>
          </View>

          {rendered ? (
            <>
              <Graph />
              <View>
                <WorldMap />
              </View>
            </>
          ) : (
            <View style={{ marginVertical: 20 }}>
              <ActivityIndicator />
            </View>
          )}

        </View>
      </ScrollView>
    </Container>
  )
}
const styles = StyleSheet.create({
  ratingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.Primary,
  },
  outOfText: {
    color: 'grey',
    alignSelf: 'flex-end',
    paddingRight: 15,
  },
})

export default DummyScreen
