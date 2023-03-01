import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';
import IdeaSummary from '../components/IdeaSummary';
import { nowTheme } from '../constants';
import { Card } from '../components';
import sampleIdeas from '../constants/sampleIdeas';


class Ideas extends React.Component {

  renderCards = () => {
    
    return (
      <Block flex style={styles.container}>
        <Text numberOfLines={2} style={styles.title}>Latest Ideas</Text>
        {
          sampleIdeas.map( (idea) =>{
            const ideaImg =require('../assets/imgs/project5.jpg');
            return  <IdeaSummary style={styles.ideaItem}
            title={idea.title}
            subHeading={idea.subHeading}
            ideaImage={idea.ideaImg}/>
          })

        }
        
      </Block>
    );
  };

  render() {
    return (
      <Block flex style={{backgroundColor:'#95BAF7', color:'white'}}>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE, 
    paddingVertical:theme.SIZES.BASE + 30, 
    justifyContent:'center'
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  }, 
  ideaItem:{
    marginBottom:24
  }, 
  
});

export default Ideas;
