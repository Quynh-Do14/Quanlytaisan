import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = [
    {
        name: 'Đang bảo dưỡng',
        population: 4,
        color: '#ff6347', // Màu sắc của phần biểu đồ
        legendFontColor: '#333',
        legendFontSize: 15
    },
    {
        name: 'Sẵn sàng sử dụng',
        population: 5,
        color: '#4caf50',
        legendFontColor: '#333',
        legendFontSize: 15
    },
    {
        name: 'Đang vận hành',
        population: 6,
        color: '#2196f3',
        legendFontColor: '#333',
        legendFontSize: 15
    },
    {
        name: 'Hỏng, lưu kho',
        population: 7,
        color: '#fd2d63',
        legendFontColor: '#333',
        legendFontSize: 15
    },
    {
        name: 'Đã thanh lý',
        population: 8,
        color: '#a927f9',
        legendFontColor: '#333',
        legendFontSize: 15
    }
];

const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#f0f0f0',
    backgroundGradientTo: '#f0f0f0',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

const PieChartComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Biểu Đồ Tròn</Text>
            <View style={styles.chart}>
                <PieChart
                    data={data}
                    width={screenWidth - 32}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
                <View style={styles.legendContainer}>
                    {data.map((item, index) => (
                        <View key={index} style={styles.legendItem}>
                            <View style={[styles.legendColorBox, { backgroundColor: item.color }]} />
                            <Text style={styles.legendText}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 16,
    },

    chart: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    legendContainer: {
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
        marginBottom: 8
    },
    legendColorBox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 8
    },
    legendText: {
        fontSize: 14,
        color: '#333'
    }
});

export default PieChartComponent;
