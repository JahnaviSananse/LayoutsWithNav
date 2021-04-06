import * as React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './Home/HomeScreen';
import DetailsScreen from './Detail/DetailScreen';
import ListScreen from './List/ListScreen';
import designView1 from './designView1/designView1';
import designView2 from './designView2/designView2';
import designView3 from './designView3/designView3';
import designView4 from './designView4/designView4';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    // <Text>HI</Text>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="designView1" component={designView1} />
        <Stack.Screen name="designView2" component={designView2} />
        <Stack.Screen name="designView3" component={designView3} />
        <Stack.Screen name="designView4" component={designView4} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
