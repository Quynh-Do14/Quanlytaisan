import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
import MainLayout from '../../../infrastructure/common/layouts/main-layout';

const StatisticalScreen = () => {
    return (
        <MainLayout>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Thống Kê
                    </Text>
                    <BarChartComponent />
                    <PieChartComponent />
                </View>

            </ScrollView>
        </MainLayout>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});

export default StatisticalScreen;
