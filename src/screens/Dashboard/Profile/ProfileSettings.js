import React,{useState} from 'react'
import {View,Text,Image,FlatList,TouchableOpacity} from "react-native";
import Container from "../../../components/layout/Container";
import AppHeader from "../../../components/layout/AppHeader";
import Content from "../../../components/layout/Content";
import ResponsiveText from "../../../components/layout/ResponsiveText";
import Colors from "../../../theme/colors";
import ProfileSettingsCard from "../../../components/ProfileSettingsCard";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";


const ProfileSettings = (props) => {
    const[showUploadBox,setShowUploadBox]=useState(false)
    const[uploadImage,setUploadImage]=useState('')

    const uploadPhoto = () => {
        launchCamera({
                  mediaType: 'photo',
                  storageOptions: {
                    // skipBackup: true,
                    // path: 'Pictures/myAppPicture/', //-->this is neccesary
                    privateDirectory: true,
                  },
            },
            (response) => {
                     setUploadImage(response.uri)
                    },
                  );
       setShowUploadBox(false)
    }

    const chooseFromGallery = () => {
        launchImageLibrary({
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
                storageOptions: {
                    // skipBackup: true,
                    // path: 'Pictures/myAppPicture/', //-->this is neccesary
                    privateDirectory: true,
                },
            },
            (response) => {
                setUploadImage(response.uri)
            },
        );
        setShowUploadBox(false)
    }

    return(
       <Container>
           <AppHeader  title={'Profile Settings'} onLeftPress={() => props.navigation.goBack()}/>
           <Content>
               <TouchableOpacity style={{alignSelf: 'center',marginTop: 30,alignItems: 'center'}} onPress={()=>setShowUploadBox(true)} >
                  {/*<Image source={{ uri : 'https://picsum.photos/id/237/200/300'}} style={styles.profileImage} />*/}
                  <Image source={{ uri : uploadImage ? uploadImage : 'https://picsum.photos/id/237/200/300' }} style={styles.profileImage} />
                  <ResponsiveText style={styles.changeText}>Change Profile Photo</ResponsiveText>
               </TouchableOpacity>
               <ProfileSettingsCard />
               <TouchableOpacity
                   onPress={()=>{props.navigation.navigate('Home')}}
                   style={styles.buttonView}>
                   <ResponsiveText style={{paddingVertical: 10,color: 'white'}}>Save</ResponsiveText>
               </TouchableOpacity>
           </Content>
           {showUploadBox && (
               <View style={styles.uploadOptionsContainer}>
                   <TouchableOpacity
                       style={styles.captureOptionItem}
                       activeOpacity={0.9}
                       onPress={uploadPhoto}>
                       <ResponsiveText>Capture Image</ResponsiveText>
                   </TouchableOpacity>
                   <TouchableOpacity
                       style={[styles.captureOptionItem, {borderBottomWidth: 0}]}
                       activeOpacity={0.9}
                       onPress={chooseFromGallery}>
                       <ResponsiveText>Choose from Gallery</ResponsiveText>
                   </TouchableOpacity>
               </View>
           )}
       </Container>
    )
}

const styles = {
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    changeText : {
            color: Colors.Primary,
            marginTop: 10
        },
    buttonView : {
        backgroundColor: Colors.Primary,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5
    },
    uploadOptionsContainer: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: wp('80'),
        borderRadius: 15,
        alignSelf: 'center',
        top: '50%',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    captureOptionItem: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
    },

}

export default ProfileSettings;
