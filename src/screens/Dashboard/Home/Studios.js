import React, { useState } from 'react'
import {
  StyleSheet, View, TouchableOpacity, ScrollView,
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Container from '../../../components/layout/Container'
import Content from '../../../components/layout/Content'
import AppHeader from '../../../components/layout/AppHeader'
import Input from '../../../components/layout/Input'
import Icons from '../../../theme/icons'
import ResponsiveText from '../../../components/layout/ResponsiveText'
import Colors from '../../../theme/colors'
import Studio from '../../../components/Studio'
import studio1 from '../../../assets/images/studio1.jpg'
import studio2 from '../../../assets/images/studio2.jpg'
import studio3 from '../../../assets/images/studio3.jpg'
import studio4 from '../../../assets/images/studio4.jpg'

const StudiosData = [
  {
    name: 'Faisalabad, Punjab , Pakistan',
    price: 499,
    address: 'Faisalabad, Punjab , Pakistan',
    image: studio1,
  },
  {
    name: 'Dreamland Studio',
    price: 750,
    address: '89 Pleasure City: Davis State ',
    image: studio2,

  },
  {
    name: 'Dreamland Studio',
    price: 750,
    address: '89 Pleasure City: Davis State ',
    image: studio3,

  },
  {
    name: 'Dreamland Studio',
    price: 750,
    address: '89 Pleasure City: Davis State ',
    image: studio4,

  },
]

function Studios({ navigation }) {
  const [studios, setStudio] = useState(StudiosData)
  const [search, setSearch] = useState('')

  const onTextChange = () => {
    const filteredStudios = StudiosData.filter(
      (item) => item.name.toLowerCase().search(search.toLowerCase()) > -1,
    )
    setStudio(filteredStudios)
  }

  return (
    <View style={{ flex: 1 }}>
      <AppHeader onLeftPress={() => navigation.goBack()} />
      <Content>
        <View style={styles.content}>
          <View style={styles.inputFieldContainer}>
            <Input
              placeholder="Discover recording studios"
              value={search}
              onChange={onTextChange}
              onChangeText={(e) => setSearch(e)}
              inputStyle={styles.searchField}
              iconContainer={{ left: 5 }}
              icon={(
                <TouchableOpacity
                  style={styles.iconContainer}
                  activeOpacity={0.5}
                  onPress={() => {
                    navigation.goBack()
                  }}
                >
                  {Icons.BackArrow({ height: wp(7), width: wp(7) })}
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={[styles.crossCloseIcon, styles.iconContainer, { right: 5 }]}
              activeOpacity={0.5}
              onPress={() => setSearch('')}
            >
              {Icons.CrossClose({ height: wp(7), width: wp(7) })}
            </TouchableOpacity>
          </View>
          <View style={styles.resultCountContainer}>
            <ResponsiveText style={styles.resultsFountText}>
              53 Studios Found
            </ResponsiveText>

            <TouchableOpacity onPress={() => alert('Filter by called!')}>
              <ResponsiveText
                style={{ ...styles.resultsFountText, color: Colors.Primary }}
              >
                Filter By
              </ResponsiveText>
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={styles.resultsContainer}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {studios.map((item, idx) => {
              return (
                <Studio
                  key={idx}
                  name={item.name}
                  price={item.price}
                  address={item.address}
                  image={item.image}
                  onPress={() => navigation.navigate('StudioDetails', { item, latitude: 31.4504, longitude: 73.1350 })}
                />
              )
            })}
          </ScrollView>
        </View>
      </Content>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
    alignItems: 'center',
  },
  inputFieldContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  searchField: {
    width: wp(100) - 30,
    height: wp(15),
    padding: 10,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 15,
  },
  iconContainer: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossCloseIcon: {
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    top: wp(4),
  },
  resultCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(100) - 30,
    marginVertical: 10,
  },
  resultsFountText: {
    fontWeight: 'bold',
    // fontSize: wp('1.3'),
  },
  resultsContainer: {
    width: wp(100) - 30,
  },
})

export default Studios
