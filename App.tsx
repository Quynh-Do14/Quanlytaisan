/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from './src/screen/category';
import { NavigationContainer } from '@react-navigation/native';
import DrawsLayout from './src/infrastructure/common/layouts/draw-layout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCategoryScreen from './src/screen/category/add';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import ViewCategoryScreen from './src/screen/category/view';
import ViewMaintenanceScreen from './src/screen/maintenance/view';
import AddMaintenanceScreen from './src/screen/maintenance/add';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"PHẦN MỀM QUẢN LÝ MÁY KHOAN, MÁY XÚC, XE VẬN TẢI"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={"DrawsLayout"}
        component={DrawsLayout}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"AddCategoryScreen"} component={AddCategoryScreen} />
      <Stack.Screen name={"ViewCategoryScreen"} component={ViewCategoryScreen} />

      <Stack.Screen name={"AddMaintenanceScreen"} component={AddMaintenanceScreen} />
      <Stack.Screen name={"ViewMaintenanceScreen"} component={ViewMaintenanceScreen} />
    </Stack.Navigator>
  )
}
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <StackNavigator />
      </ApplicationProvider>
    </NavigationContainer>
  );
}


export default App;
