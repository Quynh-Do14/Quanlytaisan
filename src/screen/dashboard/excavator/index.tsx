import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
import TableComponent from './components/Table';
import MainLayout from '../../../infrastructure/common/layouts/main-layout';

const ExcavatorScreen = () => {
    return (
        <MainLayout>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Thống kê xe vận tải
                    </Text>
                    <BarChartComponent />
                    <PieChartComponent />
                    <TableComponent />
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

export default ExcavatorScreen;
