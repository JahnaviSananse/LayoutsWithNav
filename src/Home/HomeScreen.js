import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {
  const onNext = () => {
    return navigation.navigate('Details');
  };
  const onView1 = () => {
    return navigation.navigate('designView1');
  };
  const onView2 = () => {
    return navigation.navigate('designView2');
  };
  const onView3 = () => {
    return navigation.navigate('designView3');
  };
  const onView4 = () => {
    return navigation.navigate('designView4');
  };
  const onList = () => {
    return navigation.navigate('ListScreen');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'red'}}>Press any of Below</Text>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={onNext}>
          <Text style={{fontSize: 20}}>GO NEXT</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={onView1}>
          <Text style={{fontSize: 20}}>Screen Layout 1</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={onView2}>
          <Text style={{fontSize: 20}}>Screen Layout 2</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={onView3}>
          <Text style={{fontSize: 20}}>Screen Layout 3</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={onView4}>
          <Text style={{fontSize: 20}}>Screen Layout 4</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={onList}>
          <Text style={{fontSize: 20}}>GO TO LIST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
