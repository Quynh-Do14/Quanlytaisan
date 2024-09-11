/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCategoryScreen from './src/screen/category/add';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import ViewCategoryScreen from './src/screen/category/view';
import ViewMaintenanceScreen from './src/screen/maintenance/view';
import AddMaintenanceScreen from './src/screen/maintenance/add';
import BottomMenu from './src/infrastructure/common/layouts/bottom-menu';
import AddUserScreen from './src/screen/user/add';
import ViewUserScreen from './src/screen/user/view';
import StatisticalScreen from './src/screen/dashboard/statistical';
import ExcavatorScreen from './src/screen/dashboard/excavator';
import CategoryScreen from './src/screen/category';
import MaintenanceScreen from './src/screen/maintenance';
import UserScreen from './src/screen/user';
import DrillScreen from './src/screen/dashboard/drill';
import TruckScreen from './src/screen/dashboard/truck';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"PHẦN MỀM QUẢN LÝ MÁY KHOAN, MÁY XÚC, XE VẬN TẢI"}
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen
        name={"BottomMenu"}
        component={BottomMenu}
      /> */}
      <Stack.Screen
        name={"StatisticalScreen"}
        component={StatisticalScreen}
      />
      <Stack.Screen
        name={"DrillScreen"}
        component={DrillScreen}
      />
      <Stack.Screen
        name={"ExcavatorScreen"}
        component={ExcavatorScreen}
      />
      <Stack.Screen
        name={"TruckScreen"}
        component={TruckScreen}
      />
      <Stack.Screen
        name={"CategoryScreen"}
        component={CategoryScreen}
      />
      <Stack.Screen
        name={"MaintenanceScreen"}
        component={MaintenanceScreen}
      />
      <Stack.Screen
        name={"UserScreen"}
        component={UserScreen}
      />

      <Stack.Screen name={"AddCategoryScreen"} component={AddCategoryScreen} />
      <Stack.Screen name={"ViewCategoryScreen"} component={ViewCategoryScreen} />


      <Stack.Screen name={"AddMaintenanceScreen"} component={AddMaintenanceScreen} />
      <Stack.Screen name={"ViewMaintenanceScreen"} component={ViewMaintenanceScreen} />

      <Stack.Screen name={"AddUserScreen"} component={AddUserScreen} />
      <Stack.Screen name={"ViewUserScreen"} component={ViewUserScreen} />
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
