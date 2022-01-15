import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import ResponsiveText from '../../../components/layout/ResponsiveText';
import Container from '../../../components/layout/Container';
import Content from '../../../components/layout/Content';
import InboxHeader from '../../../components/InboxHeader';
import InboxItem from '../../../components/InboxItem';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const inboxDataSet = [
  {
    username: 'Carla',
    message: 'Hi Molly! Any plans after the work?',
    timeAgo: 'Now',
    status: false,
  },
  {
    username: 'Jamali',
    message: 'Hi Molly! Any plans after the work?',
    timeAgo: 'Now',
    status: false,
  },
  {
    username: 'Ben Jim',
    message: 'Hi Molly! Any plans after the work?',
    timeAgo: 'Now',
    status: true,
  },
  {
    username: 'Josh',
    message: 'Hi Molly! Any plans after the work?',
    timeAgo: 'Now',
    status: false,
  },
];

function Inbox({navigation}) {
  const [inboxData, setInboxData] = useState(inboxDataSet);
  const [searchValue, setSearchValue] = useState('');




  const searchFilter = (text) => {
    const newData = inboxData.filter((item) => {
      return item.username.toUpperCase().search(text.toUpperCase()) > -1;
    });
    if(text.trim().length === 0){
      setInboxData(inboxDataSet)
    }else {
      setInboxData(newData)
    }
    setSearchValue(text)
  }

  return (
    <View style={{flex:1}}>
      <InboxHeader
        searchValue={searchValue}
        onChangeText={(text) => searchFilter(text)}
        onPressBack={() => navigation.goBack()}
        onPress={()=>{navigation.navigate('StudioResponse')}}
      />
      <Content>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.headingsContainer}>
              <ResponsiveText style={styles.heading}>Messages</ResponsiveText>
              <ResponsiveText style={styles.subHeading}>
                You have 2 new messages
              </ResponsiveText>
            </View>

            {inboxData.map((item, idx) => {
              return (
                <InboxItem
                  key={idx}
                  onPress={() => navigation.navigate('Conversation')}
                  username={item.username}
                  message={item.message}
                  timeAgo={item.timeAgo}
                  status={item.status}
                />
              );
            })}
          </View>
        </ScrollView>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: 8,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  subHeading: {
    fontWeight: '300',
    marginHorizontal: 15,
    color: '#bbb',
    marginVertical: 5,
  },
  headingsContainer: {
    height: wp('30'),
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
export default Inbox;
