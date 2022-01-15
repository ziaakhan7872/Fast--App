import React, { useEffect, useState } from 'react'
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native'
import AppHeader from '../components/layout/AppHeader'
import Container from '../components/layout/Container'
import Content from '../components/layout/Content'
import Button from '../components/layout/Button'
import DecisionButton from '../components/DecisionButton'

function AccountTypeDecision(props) {
  return (
    <Container style={{ flex: 1 }}>
      <AppHeader title="Choose an account type" />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <DecisionButton
          onPress={() => props.navigation.navigate('Welcome',{
            type: 'FAST',
          })}
          color={['#009C9F', '#008BA9', '#0075B6']}
          image={require('../assets/images/fastType.png')}
        />
        <DecisionButton
          onPress={() => props.navigation.navigate('Welcome',{
            type: 'FAST_TRACK',
          })}
          color={['#589FF0', '#4482C2', '#204D6E']}
          image={require('../assets/images/FastTrack.png')}
        />
      </View>

    </Container>
  )
}
export default AccountTypeDecision
