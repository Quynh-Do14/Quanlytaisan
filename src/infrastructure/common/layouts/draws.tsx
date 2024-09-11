import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, PanResponder, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const drawerWidth = width / 2; // Chiều rộng của Drawer
type Props = {
    isDraw: boolean
    setIsDraw: Function
}
function DrawerNavigator(props: Props) {
    const { isDraw, setIsDraw } = props
    const navigation = useNavigation<any>();
    const data = [
        {
            route: "StatisticalScreen",
            name: "Thống kê"
        },
        {
            route: "DrillScreen",
            name: "Máy khoan"
        },
        {
            route: "ExcavatorScreen",
            name: "Máy xúc"
        },
        {
            route: "TruckScreen",
            name: "Xe vận tải"
        },
        {
            route: "CategoryScreen",
            name: "Danh mục"
        },
        {
            route: "MaintenanceScreen",
            name: "Bảo dưỡng"
        },
        {
            route: "UserScreen",
            name: "Người dùng"
        },
    ]
    return (
        <View style={[styles.container, isDraw && styles.open]}>
            <View style={styles.mainContent}>
                {
                    data.map((it, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate(it.route)}>
                                <Text style={styles.font}>{it.name} </Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        width: drawerWidth,
        height: '100%',
        backgroundColor: '#ffffff',
        left: -drawerWidth,
        paddingHorizontal: 16,
        paddingVertical: 28,
        zIndex: 1,
        elevation: 5
    },
    open: {
        left: drawerWidth,
    },
    drawerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    mainContent: {
        display: "flex",
        flexDirection: "column",
        gap: 16
    },
    font: {
        fontSize: 16,
        fontWeight: "500"
    },
});
export default DrawerNavigator