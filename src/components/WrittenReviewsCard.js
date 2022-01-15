import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import ResponsiveText from "./layout/ResponsiveText";
import Star from 'react-native-star-view';
import { useNavigation } from '@react-navigation/native';


const WrittenReviewsCard = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{marginTop: 30}}>
            <View style={styles.mainView}>
              <View style={styles.subView}>
                  <View>
               <ResponsiveText style={{fontWeight: 'bold'}}>{props.item.title}</ResponsiveText>
                      <Star score={4} style={styles.starStyle}/>
                  </View>
                  <View>
                      <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                          <ResponsiveText style={{fontSize: 3.5}}>{props.item.name}</ResponsiveText>
                      </TouchableOpacity>

                      <ResponsiveText style={{fontSize: 3.5,color: 'grey',marginLeft: -2}}>{props.item.date}</ResponsiveText>
                  </View>
              </View>
                <View style={{marginHorizontal: 10,marginBottom: 10}}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
                </View>
            </View>
        </View>
    )

}

const styles = {
    starStyle : {
        width: 80,
        height: 20,
        marginRight: 20
    },
    mainView : {
        backgroundColor: '#F5F5F5',
        borderRadius: 5
    },
    subView : {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 20
    }
}

export default WrittenReviewsCard
