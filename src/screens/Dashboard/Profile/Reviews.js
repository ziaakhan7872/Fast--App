import React from 'react'
import {dummyArray} from "../../../components/DummyData/dummyData";
import {Text, View, Image, ScrollView,FlatList,TouchableOpacity} from "react-native";
import Container from "../../../components/layout/Container";
import AppHeader from "../../../components/layout/AppHeader";
import ResponsiveText from "../../../components/layout/ResponsiveText";
import Colors from "../../../theme/colors";
import StarCard from "../../../components/starCard";
import WrittenReviewsCard from "../../../components/WrittenReviewsCard";
const Reviews = (props) => {
    return(
        <Container style={{paddingBottom:160,flex:1,backgroundColor:'white'}}>
            <AppHeader onLeftPress={() => props.navigation.goBack()} />
            <View style={{backgroundColor: 'white', flex: 1,marginHorizontal: 20,}}>
                <View style={styles.reviewTextView}>
                    <ResponsiveText style={styles.reviewText}>Reviews</ResponsiveText>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('WriteReview')}}>
                        <ResponsiveText style={styles.writeReviewText}>Write a reivew ></ResponsiveText>
                    </TouchableOpacity>

                </View>
                <View style={{flexDirection: 'row',marginTop: 25}}>
                    <View style={{marginRight: 40}}>
                        <ResponsiveText style={styles.ratingText}>4.3</ResponsiveText>
                        <ResponsiveText style={styles.outOfText}>out of 5</ResponsiveText>
                    </View>
                    <StarCard />
                </View>
                <View style={{marginBottom: 10}}>
               <FlatList
                   keyExtractor={(item, index) => item.id}

                   data={dummyArray}
                   renderItem={({item,index})=> {
                       return <WrittenReviewsCard item={item} />
                   }}
               />
                </View>
            </View>
        </Container>
    )
}

const styles={
    reviewTextView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center'
        },
    reviewText : {
        fontWeight: 'bold',
        fontSize: 6
    },
    writeReviewText : {
        fontSize: 3.5,
        color: Colors.Primary
    },
    ratingText : {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.Primary
    },
    outOfText : {
        color: 'grey',
        alignSelf: 'flex-end',
        paddingRight: 15
    }
}

export default Reviews;
