import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native'
import Styled from 'styled-components'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Video from 'react-native-video'
import { TextInput } from 'react-native-gesture-handler'
import Container from '../../../components/layout/Container'
import Content from '../../../components/layout/Content'
import AppHeader from '../../../components/layout/AppHeader'
import StoryItem from '../../../components/StoryItem'
import Icons from '../../../theme/icons'
import ResponsiveText from '../../../components/layout/ResponsiveText'
import Colors from '../../../theme/colors'
import CommentDisplay from '../../../components/CommentDisplay'
import Search from '../../../assets/icons/search.png'
import Feed from '../../../components/Feed'

const stories = [
  {
    uri: 'https://picsum.photos/id/22/200/300',
  },
  {
    uri: 'https://picsum.photos/id/55/200/300',
  },
  {
    uri: 'https://picsum.photos/id/32/200/300',
  },
  {
    uri: 'https://picsum.photos/id/77/200/300',
  },
  {
    uri: 'https://picsum.photos/id/22/200/300',
  },
]
const filterTypes = ['Feed', 'Popular', 'Recommended', 'Nearby']
const postsData = [
  {
    user: {
      username: 'Tammyolson',
      skill: 'Artist',
      stars: 3,
      total: 23,
      profile: `https://picsum.photos/id/${485}/200/300`,
    },
    status: 'Available',
    payload: require('../../../assets/images/file_example_MP4_640_3MG.mp4'),
    likes: {
      liked: true,
      total: '31968',
      recentLikes: [
        `https://picsum.photos/id/${257}/200/300`,
        `https://picsum.photos/id/${322}/200/300`,
      ],
    },
    shares: '120',
    comments: [
      {
        username: 'janlosert',
        text:
          'Hey guys! Please listent to this and share you views and feedback in the comments section below. Don’t forget to rate me  in you love my voice…',
      },
      {
        username: 'snowgraphs',
        text: '👏👏👏',
      },
      {
        username: 'marcallcock',
        text: 'Awesome! That’s great man!!',
      },
      {
        username: 'firmansananda',
        text: 'Cool mate. 👌🏻',
      },
      {
        username: 'lucasmelk',
        text: 'We expected it to be better',
      },
      {
        username: 'muroadriano',
        text: 'Alright star, we are looking forward to see you tonight… yay!',
      },
      {
        username: 'jleet._',
        text: 'Wow, nice try at damage control.',
      },
      {
        username: 'dwtsrikerI',
        text: 'we will be looking forward…',
      },
      {
        username: 'emma.elizabethh_',
        text: 'Please change it back',
      },
    ],
  },
  {
    user: {
      username: 'janlosert',
      skill: 'Singer',
      stars: 5,
      total: 87,
      profile: `https://picsum.photos/id/${354}/200/300`,
    },
    status: 'Booked',
    payload: require('../../../assets/images/file_example_MP4_640_3MG.mp4'),
    likes: {
      liked: false,
      total: '2502',
      recentLikes: [
        `https://picsum.photos/id/${144}/200/300`,
        `https://picsum.photos/id/${322}/200/300`,
      ],
    },
    shares: '50',
    comments: [
      {
        username: 'janlosert',
        text:
          'Hey guys! Please listent to this and share you views and feedback in the comments section below. Don’t forget to rate me  in you love my voice…',
      },
      {
        username: 'snowgraphs',
        text: '👏👏👏',
      },
      {
        username: 'marcallcock',
        text: 'Awesome! That’s great man!!',
      },
      {
        username: 'firmansananda',
        text: 'Cool mate. 👌🏻',
      },
      {
        username: 'lucasmelk',
        text: 'We expected it to be better',
      },
      {
        username: 'muroadriano',
        text: 'Alright star, we are looking forward to see you tonight… yay!',
      },
    ],
  },
]

const AdvertiseHereText = Styled.Text`
    color: white;
    font-size: 25px;
    font-weight: bold
  `

function Home({ navigation }) {
  const startCount = ['', '', '', '', '']
  const [posts, setPosts] = useState(postsData)
  const [locationFilterTypeIdx, setLocationFilterTypeIdx] = useState(0)
  const [videoLoadData, SetVideoLoadData] = useState({})
  const [comment, setComment] = useState('')
  const [commentFoucsed, setCommentFocused] = useState(false)

  //console.log('>>>>>>>>>>>', locationFilterTypeIdx)

  const toggleLike = (idx) => {
    posts[idx].likes.liked = !posts[idx].likes.liked
    const likes = posts[idx].likes.liked
      ? parseInt(posts[idx].likes.total) + 1
      : parseInt(posts[idx].likes.total) - 1
    posts[idx].likes.total = likes.toString()
    setPosts([...posts])
  }

  const onVideoLoad = (e) => {
    SetVideoLoadData(e)
  }

  const onSend = () => {
    if (!comment.length) {
      return
    }
    const temp = commentsDS
    temp.push({
      username: 'Jack S.',
      text: comment,
    })
    setCommentsDS([...temp])
    setComment('')
  }

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <Content>
        <ScrollView style={styles.content}>
          <View style={styles.subContent}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.storyContainer}
            >
              <StoryItem
                border={false}
                uri="https://picsum.photos/id/1/200/300"
                onPress={() => navigation.navigate('AddPost')}
              />
              {stories.map((item, idx) => {
                return (
                  <StoryItem
                    key={idx}
                    border
                    uri={item.uri}
                    onPress={() => navigation.navigate('LiveVideo')}
                  />
                )
              })}
            </ScrollView>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.advertisementContainer}
              onPress={() => navigation.navigate('AdvertisementInquiry')}
            >
              <ImageBackground
                source={require('../../../assets/images/advertisement.png')}
                style={styles.advertiseImg}
              >
                <View style={styles.advertiseOverlay}>
                  <AdvertiseHereText>Advertise Here</AdvertiseHereText>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.locatedStudioContainer}>
              <ImageBackground
                source={require('../../../assets/images/Rectangle.png')}
                style={styles.locatedStudioImg}
              >
                <View style={styles.locatedStudioOverlay}>
                  <TouchableOpacity
                    style={styles.searchStudio}
                    onPress={() => navigation.navigate('Studios')}
                    activeOpacity={0.9}
                  >
                    <ResponsiveText iveText style={{ color: '#BBB' }}>
                      Discover recording studios or songwriters
                    </ResponsiveText>
                    <Image style={{ width: 20, height: 20, tintColor: 'grey' }} source={Search} />
                    {/* {Icons.Search({tintColor: 'lightgrey'})} */}
                  </TouchableOpacity>
                  <ResponsiveText style={{ ...styles.subHeading, marginTop: 20, fontSize: 3.5 }}>
                    Studio Location
                  </ResponsiveText>
                  <AdvertiseHereText>New York</AdvertiseHereText>
                </View>
              </ImageBackground>
            </View>

            {/* Search Content filter */}
            <View style={{ width: wp(100), alignItems: 'flex-end' }}>
              <ScrollView contentContainerStyle={styles.filterContainer} horizontal showsHorizontalScrollIndicator={false}>

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
              </ScrollView>
            </View>
            {/* Posts */}
            <View style={styles.postContainer}>
              {locationFilterTypeIdx === 0 ? (
                  posts.map((item, idxp) => {
                    return (
                        <View key={idxp} style={{ marginVertical: 8 }}>
                          <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => navigation.navigate('LiveVideo')}
                                style={[styles.userInfoContainer, { maxWidth: '45%', height: 80 }]}
                            >
                              <StoryItem
                                  containerSize={60}
                                  border
                                  borderPurple
                                  uri={item.user.profile}
                              />
                              <View style={styles.userInfoBody}>
                                <View style={styles.userTextualInfoContainer}>
                                  <ResponsiveText style={styles.username}>
                                    {item.user.username}
                                  </ResponsiveText>
                                  <ResponsiveText style={styles.userSkill}>
                                    {item.user.skill}
                                  </ResponsiveText>
                                </View>
                              </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('Reviews')
                                }}
                                style={styles.ratingContainer}
                            >
                              {startCount.map((star, idx) => {
                                return (
                                    <View key={idx}>
                                      {idx <= item.user.stars - 1
                                          ? Icons.RatingStar({
                                            tintColor: '#FFC107',
                                            marginRight: 2,
                                          })
                                          : Icons.RatingStar({
                                            tintColor: '#CCCCCC',
                                            marginRight: 2,
                                          })}
                                    </View>
                                )
                              })}
                              <ResponsiveText style={styles.ratingInstances}>
                                (
                                {item.user.total}
                                )
                              </ResponsiveText>
                            </TouchableOpacity>
                            {/* </View> */}
                          </TouchableOpacity>
                          {/* Post payload */}

                          <View style={styles.postPayload}>
                            <View style={styles.videoContainer}>
                              <Video
                                  source={item.payload}
                                  onBuffer={() => {}}
                                  onError={() => {}}
                                  onLoad={(e) => onVideoLoad(e)}
                                  resizeMode="cover"
                                  repeat
                                  style={styles.backgroundVideo}
                              />
                              <View style={styles.durationContainer}>
                                <ResponsiveText style={styles.videoDuration}>
                                  00:00
                                </ResponsiveText>
                                <ResponsiveText style={styles.videoDuration}>
                                  00:30
                                </ResponsiveText>
                              </View>
                              <View
                                  style={[styles.studioStatus, item.status === 'Available' ? { borderColor: '#0099A2' } : { borderColor: 'red' }]}
                              >
                                {item.status === 'Available' ? (
                                    <TouchableOpacity onPress={() => navigation.navigate('OfferCard')}>
                                      <ResponsiveText style={styles.itemStatusText}>{item.status}</ResponsiveText>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={() => navigation.navigate('JobCard')}>
                                      <ResponsiveText style={styles.itemStatusText}>{item.status}</ResponsiveText>
                                    </TouchableOpacity>
                                )}
                              </View>
                            </View>
                          </View>
                          {/* post Actions */}
                          <View style={styles.postFeatureContainer}>
                            <View style={styles.postActionsContainer}>
                              <TouchableOpacity
                                  onPress={() => {
                                    toggleLike(idxp)
                                  }}
                              >
                                {item.likes.liked
                                    ? Icons.RedHeart(styles.postActionIcon)
                                    : Icons.Like(styles.postActionIcon)}
                              </TouchableOpacity>
                              <TouchableOpacity
                                  onPress={() => navigation.navigate('comments')}
                                  style={{ marginHorizontal: 10 }}
                              >
                                {Icons.Comment(styles.postActionIcon)}
                              </TouchableOpacity>
                              <TouchableOpacity>
                                {Icons.Share({
                                  ...styles.postActionIcon,
                                  // height: 40,
                                  width: 35,
                                })}
                              </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.likesContainer}
                                onPress={() => navigation.navigate('LikedBy')}
                            >
                              <Image
                                  source={{ uri: item.likes.recentLikes[0] }}
                                  style={[styles.likedByDP, { marginRight: -12.5 }]}
                              />
                              <Image
                                  source={{ uri: item.likes.recentLikes[1] }}
                                  style={styles.likedByDP}
                              />
                              <ResponsiveText style={styles.likeCounts}>
                                {item.likes.total}
                                {' '}
                                likes
                              </ResponsiveText>
                            </TouchableOpacity>
                            <View style={styles.shareContainer}>
                              <View style={styles.greenCircle} />
                              <ResponsiveText style={styles.likeCounts}>
                                {item.shares}
                                {' '}
                                shares
                              </ResponsiveText>
                            </View>
                          </View>
                          {/* Comments Container */}
                          <View style={styles.commentsContainer}>

                            <ResponsiveText style={styles.commentBy}>
                              <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                                <ResponsiveText style={{ fontWeight: 'bold', marginBottom: -5 }}>
                                  {`${item.comments[0].username} `}
                                </ResponsiveText>
                              </TouchableOpacity>

                              <ResponsiveText
                                  style={{ ...styles.comment, color: '#013569' }}
                              >
                                {item.comments[0].text}
                              </ResponsiveText>
                            </ResponsiveText>
                            <View style={styles.postedTimeContainer}>
                              <ResponsiveText style={styles.hourAgo}>
                                3 HOURS AGO
                              </ResponsiveText>

                              <TouchableOpacity onPress={() => navigation.navigate('comments', { comments: item.comments })}>
                                <ResponsiveText style={styles.hourAgo}>
                                  View all 143 comments
                                </ResponsiveText>
                              </TouchableOpacity>

                            </View>
                            {item.comments.map((comment, idx) => {
                              return (
                                  <CommentDisplay key={idx} comment={comment} idx={idx} {...navigation} />
                              )
                            })}
                            <TouchableOpacity
                                style={{ flexDirection: 'row', marginVertical: 5 }}
                                onPress={() => navigation.navigate('comments')}
                                activeOpacity={0.8}
                            >
                              <Image
                                  source={{
                                    uri:
                                        'https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8',
                                  }}
                                  style={{
                                    height: 40, width: 40, borderRadius: 20, marginRight: 10,
                                  }}
                              />
                              <View style={{
                                height: 30,
                                marginTop: 5,
                              }}
                              >
                                <ResponsiveText style={{ color: '#817f7f' }}>Add a Comment...</ResponsiveText>
                              </View>

                            </TouchableOpacity>
                          </View>
                        </View>
                    )
                  })

              ) : (
                  [...Array(5)].map((item, index) => {
                    return <Feed navigation={navigation} key={index} />
                  })

              )}

            </View>
          </View>
        </ScrollView>
      </Content>
    </View>
  )
}

{ /* <TextInput */ }
{ /*  placeholder='Add a Comment...' */ }
{ /*  style={[styles.input, commentFoucsed ? {borderColor: '#0099A2'} : {borderColor: 'transparent'}]} */ }
{ /*  onBlur={() => setCommentFocused(false)} */ }
{ /*  onFocus={() => setCommentFocused(true)} */ }
{ /*  value={comment} */ }
{ /*  onChangeText={(e) => setComment(e)} */ }
{ /*  onSubmitEditing={onSend} */ }
{ /*  textAlignVertical={'top'} */ }
{ /* /> */ }

const styles = StyleSheet.create({
  content: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: '#F2F3FA',
  },
  subContent: {
    flex: 1,
    paddingBottom: 10,
  },
  storyContainer: {
    flexDirection: 'row',
    maxHeight: wp('30'),
    padding: 5,
    paddingVertical: 15,
  },
  advertisementContainer: {
    width: wp('100'),
    height: wp('60'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  advertiseImg: {
    width: wp('100'),
    height: wp('60'),
    resizeMode: 'contain',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 3,
  },
  advertiseOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locatedStudioContainer: {
    width: wp('100'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  locatedStudioImg: {
    width: wp('100'),
    height: wp('60'),
    resizeMode: 'contain',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 5,
  },
  locatedStudioOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    paddingTop: 35,
  },
  searchStudio: {
    width: wp('95%'),
    height: wp('15'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    paddingRight: 20,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
  },
  searchIconContainer: {
    alignItems: 'center',
    left: null,
    right: 8,
    width: 30,
  },
  subHeading: {
    color: '#FFF',
    // fontSize: wp('1.2'),
    marginVertical: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    // borderBottomLeftRadius: 10,
    // borderTopLeftRadius: 10,
    // width: wp('97'),
    height: 45,
    elevation: 2,
    marginVertical: 10,
    paddingRight: 10,
    marginLeft: wp(5),
  },
  filterItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(30),
  },
  filterText: {
    color: Colors.Primary,
    fontSize: 3,
    width: wp(30),
    textAlign: 'center',

  },
  filterTypeActive: {
    backgroundColor: Colors.Primary,
    borderRadius: 10,
  },
  postContainer: {},
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 10,
    // backgroundColor:'red'
  },
  userInfoBody: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  userTextualInfoContainer: {
    // paddingVertical: 10,
    // justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontWeight: 'bold',
    // fontSize: wp('1.4'),
  },
  userSkill: {
    color: '#000',
    fontSize: 3.5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  ratingInstances: {
    fontWeight: 'bold',
    marginLeft: 3,
  },
  postPayload: {
    flex: 1,
    backgroundColor: '#E4E4E4',
  },
  videoContainer: {
    position: 'relative',
    width: wp('100'),
    height: wp('70'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'transparent',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('100'),
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 5,
    zIndex: 9999,
  },
  videoDuration: {
    color: '#FFF',
    fontSize: 3,
  },
  postFeatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
    // backgroundColor:'red'
  },
  postActionsContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    // backgroundColor:'black'
  },
  postActionIcon: {
    height: 25,
    width: 25,
    // marginRight: 5,

  },
  likesContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likedByDP: {
    height: 25,
    width: 25,
    borderRadius: 13,
  },
  likeCounts: {
    fontSize: 3,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  shareContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 3,

  },
  greenCircle: {
    backgroundColor: 'green',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  commentsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 5,
    paddingHorizontal: 15,
  },
  commentBy: {
    // fontSize: wp('1.1'),
    fontWeight: 'bold',
    marginVertical: 3,
  },
  comment: {
    fontSize: 3.5,
    fontWeight: '300',
    alignItems: 'center',
    // backgroundColor:'yellow',
    // textAlign:'center',
    // alignItems:'center',
    // marginTop:100
  },
  postedTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hourAgo: {
    fontWeight: '200',
    color: '#BBB',
    fontSize: 3.5,
    marginVertical: 5,
  },
  studioStatus: {
    paddingHorizontal: wp(5),
    paddingVertical: wp(1),
    position: 'absolute',
    right: 10,
    top: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  itemStatusText: {
    color: '#FFF',
  },
})
export default Home
