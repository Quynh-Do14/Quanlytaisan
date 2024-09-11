import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatisticalScreen from '../../../screen/dashboard/statistical';
import ExcavatorScreen from '../../../screen/dashboard/excavator';
import CategoryScreen from '../../../screen/category';
import MaintenanceScreen from '../../../screen/maintenance';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawsLayout() {
    return (
        <Tab.Navigator
            initialRouteName={"StatisticalScreen"}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#0C0F14",
                    borderColor: "#0C0F14",
                },
            }}
        >
            <Tab.Screen
                name={"Thống kê"}
                component={StatisticalScreen}
            />
            <Tab.Screen
                name={"Máy xúc"}
                component={ExcavatorScreen}
            />
            <Tab.Screen
                name={"Danh mục"}
                component={CategoryScreen}
            />
            <Tab.Screen
                name={"Bảo dưỡng"}
                component={MaintenanceScreen}
            />
        </Tab.Navigator>
        // <Drawer.Navigator initialRouteName="StatisticalScreen">
        //     <Drawer.Screen name="StatisticalScreen" component={StatisticalScreen} />
        //     <Drawer.Screen name="CategoryScreen" component={CategoryScreen} />
        // </Drawer.Navigator>

    );
}
export default DrawsLayout;