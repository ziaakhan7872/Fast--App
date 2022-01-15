import React from 'react'
import {View,Text,Image} from "react-native";
import Colors from "../theme/colors";
import StarIconCard from "./StarIconCard";



const StarCard = () => {
    return(
        <View>
            <View style={styles.subView}>
         <StarIconCard count={5}/>
            <View style={styles.greyView1}>
            <View style={styles.whiteView1}/>
            </View>
            </View>

            <View style={styles.subView}>
                <StarIconCard count={4} />
                <View style={styles.greyView2}>
                    <View style={styles.whiteView2}/>
                </View>
            </View>

            <View style={styles.subView}>
                <StarIconCard  count={3}/>
                <View style={styles.greyView3}>
                    <View style={styles.whiteView3}/>
                </View>
            </View>

            <View style={styles.subView}>
               <StarIconCard count={2}/>
                <View style={styles.greyView4}>
                    <View style={styles.whiteView4}/>
                </View>
            </View>

            <View style={styles.subView}>
                <StarIconCard />
                <View style={styles.greyView5}>
                    <View style={styles.whiteView5}/>
                </View>
            </View>



        </View>
    )
}

const styles = {
    subView : {
        flexDirection: 'row',
        alignItems: 'center'
    },
    greyView1 : {
        backgroundColor: 'grey',
        height: 4,
        width: '50%',
        borderRadius: 10
    },
    whiteView1 : {
        backgroundColor: Colors.Primary,
        height: 4,
        width: '80%',
        borderRadius: 10
    },
    greyView2 : {
        backgroundColor: 'grey',
        height: 4,
        width: '50%',
        borderRadius: 10
    },
    whiteView2 : {
        backgroundColor: Colors.Primary,
        height: 4,
        width: '30%',
        borderRadius: 10
    },
    greyView3 : {
        backgroundColor: 'grey',
        height: 4,
        width: '50%',
        borderRadius: 10
    },
    whiteView3 : {
        backgroundColor: Colors.Primary,
        height: 4,
        width: '80%',
        borderRadius: 10
    },
    greyView4 : {
        backgroundColor: 'grey',
        height: 4,
        width: '50%',
        borderRadius: 10
    },
    whiteView4 : {
        backgroundColor: Colors.Primary,
        height: 4,
        width: '10%',
        borderRadius: 10
    },
    greyView5 : {
        backgroundColor: 'grey',
        height: 4,
        width: '50%',
        borderRadius: 10
    },
    whiteView5 : {
        backgroundColor: Colors.Primary,
        height: 4,
        width: '25%',
        borderRadius: 10
    }

}

export default StarCard
