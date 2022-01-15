import React from 'react'
import {View,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard} from "react-native";
import Container from "../../../components/layout/Container";
import AppHeader from "../../../components/layout/AppHeader";
import ResponsiveText from "../../../components/layout/ResponsiveText";
import star from '../../../assets/icons/star.png'
import Colors from "../../../theme/colors";
import {Rating,AirbnbRating} from 'react-native-ratings';

const WriteReview = (props) => {
    return (
     <Container>
         <AppHeader onLeftPress={() => props.navigation.goBack()} />
         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex: 1}}>
             <View style={{flex: 1}}>
         <View style={{flex: 1,marginTop: 25,marginHorizontal: 30}}>
        <ResponsiveText style={styles.writeReviewText} >Write a review</ResponsiveText>
             <View style={styles.starView}>
                 <AirbnbRating
                     showRating={false}
                     defaultRating={4}
                     count={5}
                     // ratingImage={star}
                     selectedColor="#FFBF09"
                     // ratingColor='#3498db'
                     // ratingBackgroundColor='#c8c7c8'
                     // ratingCount={5}
                     size={25}
                     // onFinishRating={this.ratingCompleted}
                     style={{ paddingVertical: 10 }}
                 />
                 <ResponsiveText style={{fontSize: 3.2,color : 'grey'}}>Tap a star to rate</ResponsiveText>
             </View>
             <View style={styles.titleInput}>
                 <TextInput placeholder='Title' placeholderTextColor='#8C8D99' style={{paddingHorizontal: 10,paddingVertical: 10}}/>
             </View>
             {/*<View style={styles.reviewInput}>*/}
                 <TextInput placeholder='Review'  placeholderTextColor='#8C8D99' multiline={true} style={{paddingHorizontal: 10,textAlignVertical: 'top',height: 150,backgroundColor: '#F5F5F5', }}/>
             {/*</View>*/}

         </View>
        <TouchableOpacity
            onPress={()=>{props.navigation.navigate('Home')}}
            style={styles.buttonView}>
            <ResponsiveText style={{paddingVertical: 11,color: 'white'}}>Publish</ResponsiveText>
     </TouchableOpacity>
             </View>
         </TouchableWithoutFeedback>
     </Container>
    )
}

const styles={
    starStyle : {
        width: 160,
        height: 30,
        marginRight: 20,
    },
    writeReviewText: {
        fontWeight: 'bold',
        fontSize: 6
    },
    starView: {
        alignSelf: 'center',
        marginTop: 25,
        alignItems: 'center'
    },
    titleInput: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.Primary,
        marginTop: 40,
        backgroundColor: '#F5F5F5',
        marginBottom: 20
    },
    reviewInput: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        marginTop: 15,
        borderRadius: 5,
        // height: '25%'
    },
    buttonView : {
        backgroundColor: Colors.Primary,
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5
    }
}

export default WriteReview
