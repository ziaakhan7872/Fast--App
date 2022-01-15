import React, { useEffect } from 'react'
import {
  View, Image, Platform, Keyboard,
} from 'react-native'

import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Styled from 'styled-components'
import { navigationRef } from './navigate'

import Splash from '../screens/auth/Splash'
import Welcome from '../screens/auth/Welcome'
import Register from '../screens/auth/Register'
import Login from '../screens/auth/Login'
import ForgotPassword from '../screens/auth/ForgotPassword'
import GetPremium from '../screens/Subscription/GetPremium'
import ForgetPasswordEnterCode from '../screens/auth/ForgetPasswordEnterCode'
import UpdatePassword from '../screens/auth/UpdatePassword'
import Home from '../screens/Dashboard/Home/Home'
import Notification from '../screens/Dashboard/Notification/Notification'
import AddPost from '../screens/Dashboard/Post/AddPost'
import Inbox from '../screens/Dashboard/Chat/Inbox'
import Profile from '../screens/Dashboard/Profile/Profile'
import Colors from '../theme/colors'
import Icons from '../theme/icons'
import Studios from '../screens/Dashboard/Home/Studios'
import StudioDetails from '../screens/Dashboard/Home/StudioDetails'
import Conversation from '../screens/Dashboard/Chat/Conversation'
import Settings from '../screens/Dashboard/Profile/Settings'
import AdvertisementInquiry from '../screens/Subscription/AdvertisementInquiry'
import Checkout from '../screens/Subscription/Checkout'
import CardDetails from '../screens/Subscription/CardDetails'
import EscrowApproved from '../screens/Subscription/EscrowApproved'
import LiveVideo from '../screens/Dashboard/Post/LiveVideo'
import Comments from '../screens/Dashboard/Home/Comment'
import TOS from '../screens/auth/TOS'
import PrivacyPolicy from '../screens/auth/PrivacyPolicy'
import NotificationSettings from '../screens/Dashboard/Profile/NotificationSettings'
import PrivacySettings from '../screens/Dashboard/Profile/PrivacySetting'
import MyBookings from '../screens/Dashboard/Profile/MyBookings'
import ProfileSettings from '../screens/Dashboard/Profile/ProfileSettings'
import Reviews from '../screens/Dashboard/Profile/Reviews'
import StudioResponse from '../screens/Dashboard/Profile/StudioResponse'
import WriteReview from '../screens/Dashboard/Profile/WriteReview'
import StudioMaps from '../screens/Dashboard/Home/StudioMaps'
import LikedBy from '../screens/Dashboard/Home/LikedBy'
import NewTest from '../screens/Dashboard/Profile/NewScreens/NewTest'
import MyStudio from '../screens/Dashboard/Profile/NewScreens/MyStudio'
import MySongwriter from '../screens/Dashboard/Profile/NewScreens/MySongwriter'
import DummyScreen from '../screens/Dashboard/Profile/NewScreens1/DummyScreen'
import OfferCard from '../screens/Dashboard/Profile/NewScreens/OfferCard'
import JobCard from '../screens/Dashboard/Profile/NewScreens/JobCard'
import AccountTypeDecision from '../screens/AccountTypeDecision'
import { connect } from 'react-redux';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabItemContainer = Styled.View`
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-width: 3px
  ${({ focused }) => `border-color: ${focused ? Colors.Primary : '#FFF'}`};
  width: 80%;
  height: 100%;
`

const ProfileImage = Styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 15px
`

function TabNavigation({ route: pRoute, visible, ...props }) {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'HomeStack':
              return (
                <TabItemContainer focused={focused}>
                  {Icons.Home({
                    tintColor: focused ? Colors.Primary : '#B9BCC5',
                  })}
                </TabItemContainer>
              )
            case 'Notification':
              return (
                <TabItemContainer focused={focused}>
                  {Icons.Notification({
                    tintColor: focused ? Colors.Primary : '#B9BCC5',
                  })}
                </TabItemContainer>
              )
            case 'AddPost':
              return (
                <TabItemContainer focused={focused}>
                  <Image
                    source={require('../assets/icons/Plus.png')}
                    style={{ height: 50, width: 50, marginBottom: -6 }}
                  />
                </TabItemContainer>
              )
            case 'ChatStack':
              return (
                <TabItemContainer focused={focused}>
                  {Icons.Inbox({
                    tintColor: focused ? Colors.Primary : '#B9BCC5',
                  })}
                </TabItemContainer>
              )
            case 'ProfileStack':
              return (
                <TabItemContainer focused={focused}>
                  <ProfileImage
                    source={{
                      uri:
                        'https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8',
                    }}
                  />
                </TabItemContainer>
              )
            default:
              break
          }
        },
      })}
      style={{
        borderWidth: 0,
        elevation: 0,
      }}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        showIcon: true,
        keyboardHidesTabBar: Platform.OS !== 'ios',

      }}
      initialRouteName="HomeStack"
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen
        name="AddPost"
        options={{
          unmountOnBlur: true,
        }}
        component={AddPost}
      />
      <Tab.Screen name="ChatStack" component={ChatStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Studios" component={Studios} />
      <Stack.Screen name="LiveVideo" component={LiveVideo} />
      <Stack.Screen name="comments" component={Comments} />
      <Stack.Screen name="StudioMaps" component={StudioMaps} />
      <Stack.Screen name="LikedBy" component={LikedBy} />
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="WriteReview" component={WriteReview} />
      <Tab.Screen name="Profile" component={Profile} />
      <Stack.Screen name="OfferCard" component={OfferCard} />
      <Stack.Screen name="JobCard" component={JobCard} />
      <Tab.Screen name="MySongwriter" component={MySongwriter} />
      <Stack.Screen name="DummyScreen" component={DummyScreen} />

    </Stack.Navigator>
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Profile" headerMode="none">
      {/* <Tab.Screen name="Profile" component={Profile} checkID={true} /> */}
      <Stack.Screen name="Profile">
        {(props) => <Profile {...props} checkID />}
      </Stack.Screen>
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="NotificationSettings" component={NotificationSettings} />
      <Tab.Screen name="PrivacySettings" component={PrivacySettings} />
      <Tab.Screen name="MyBookings" component={MyBookings} />
      <Tab.Screen name="ProfileSettings" component={ProfileSettings} />
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="WriteReview" component={WriteReview} />
      <Tab.Screen name="NewTest" component={NewTest} />
      <Tab.Screen name="MyStudio" component={MyStudio} />
      <Tab.Screen name="MySongwriter" component={MySongwriter} />
      <Stack.Screen name="DummyScreen" component={DummyScreen} />

    </Stack.Navigator>
  )
}

function ChatStack() {
  return (
    <Stack.Navigator initialRouteName="Inbox" headerMode="none">
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="StudioResponse" component={StudioResponse} />
      <Tab.Screen name="MyBookings" component={MyBookings} />
      <Tab.Screen name="WriteReview" component={WriteReview} />
    </Stack.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
    </Stack.Navigator>
  )
}

const ChoiceNavigator = (props) => {
  //console.log('props',props)
  return (
    <Stack.Navigator headerMode="none">
     {props.loginToken ? (
        <Stack.Screen name="GetPremium" component={GetPremium} />  
      ) : (
        <Stack.Screen name="Auth" component={AuthStack}/>
      )}
    </Stack.Navigator>
  )
}

function mapStateToProps(state) {
  return {
    loginToken: state.auth.loginToken?.token
  }
}

const ChoiceNavigatorWithRedux = connect(mapStateToProps,null)(ChoiceNavigator)

const  MainStack=(props)=> {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      headerMode="none"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="AccountTypeDecision" component={AccountTypeDecision} />
      <Stack.Screen name="TOS" component={TOS} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ChoiceNavigator" component={ChoiceNavigatorWithRedux} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="StudioDetails" component={StudioDetails} />
      <Stack.Screen name="Reviews" component={Reviews} />
      <Stack.Screen name="Conversation" component={Conversation} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
      <Stack.Screen name="EscrowApproved" component={EscrowApproved} />
      <Stack.Screen
        name="AdvertisementInquiry"
        component={AdvertisementInquiry}
      />
      <Stack.Screen
        name="ForgetPasswordEnterCode"
        component={ForgetPasswordEnterCode}
      />

    </Stack.Navigator>
  )
}
const  Navigation=(props) =>{
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default Navigation;

