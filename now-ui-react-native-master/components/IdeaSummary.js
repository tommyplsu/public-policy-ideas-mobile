import React from "react";
import { Block } from 'galio-framework';
import { StyleSheet, Text, Dimensions, View, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

class IdeaSummary extends React.Component{
    render(){
        return (
            <Block flex row >
               
                        <Image
                            source={this.props.ideaImage}
                            resizeMode="cover"
                            style={styles.thumb}
                        />
                        <Block flex style={{paddingHorizontal:12}}>
                                <Text style={{fontWeight:'600', marginBottom:7, fontSize:16}}>{this.props.title}</Text>
                                <Text style={{fontSize:13}}>{this.props.subHeading}</Text>
                                <Block style={{marginTop:7}} flex row space-evenly>
                                    <Octicons name="thumbsup" size={16} color="blue" />
                                    <Text>76k</Text>
                                    <MaterialCommunityIcons name="hammer-screwdriver" size={16} color="black" />
                                    <Text>21k</Text>
                                    <Octicons name="thumbsdown" size={16} color="blue" />
                                    <Text>48k</Text>
                                </Block>
                        </Block>
                
            </Block>
            
        )
    }
}

const styles = StyleSheet.create({
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',
        width: thumbMeasure,
        height: thumbMeasure
      },
    summary:{
        flex:1, 
        flexDirection:"row",
        paddingTop:5, 
        paddingBottom:5, 

    },
    details:{
        flex:1, 
        fontFamily:'montessarat-bold',
        flexDirection:'column'
        
    }
})

export default IdeaSummary;

/*<View styles={styles.summary}>
               <Image
                    source={props.ideaImage}
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                <View styles={styles.details}>
                        <Text size={18}>{props.title}</Text>
                        <Text size={16}>{props.subHeading}</Text>
                        
                </View>
        </View>

*/