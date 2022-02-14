import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Button
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from './actions/food';

const FoodList = () => {

  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deleteFood(key))

  const foods = useSelector(state => state.foodReducer.foodList)

 const getItem =(data)=>{
  return (
   <View>
        <Text >{data.item.name}</Text>
        <Button title='Delete' onPress={() => deleteCurrent(data.item.key)}>
            
        </Button>
   </View>
  );
 } 
  return (
    <FlatList style={styles.listContainer}
      data={foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
        getItem(data)
      }
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    //backgroundColor: '#212121',
    padding: 16
  },
  listText: {
    
    fontSize: 30
  },
});

export default FoodList;