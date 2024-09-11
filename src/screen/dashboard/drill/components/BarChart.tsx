import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const BarChartComponent = () => {
    // Lấy chiều rộng màn hình
    const screenWidth = Dimensions.get('window').width;

    // Dữ liệu cho biểu đồ
    const data = {
        labels: ['Máy khoan điện', 'Máy khoan thủy lực'],  // Nhãn của các cột
        datasets: [
            {
                data: [4, 3],  // Tổng cộng
                color: () => '#333333'  // Màu đen
            },
            {
                data: [1, 2],  // Sẵn sàng sử dụng
                color: () => '#00FF00'  // Màu xanh lá cây
            },
            {
                data: [2, 1],  // Đang vận hành
                color: () => '#0000FF'  // Màu xanh dương
            },
            {
                data: [1, 0],  // Đang bảo dưỡng
                color: () => '#FFA500'  // Màu cam
            },
        ],
    };

    // Cấu hình biểu đồ
    const chartConfig = {
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0, // Hiển thị không số thập phân
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Màu của trục và nhãn
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        },
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thống kê</Text>
            <BarChart
                data={data}
                width={screenWidth}  // Chiều rộng của biểu đồ
                height={250}  // Chiều cao của biểu đồ
                yAxisLabel=""  // Nhãn trục Y
                yAxisSuffix=""
                chartConfig={chartConfig}
                verticalLabelRotation={0}  // Không xoay nhãn
                fromZero={true}  // Bắt đầu từ số 0
                showBarTops={true}  // Hiển thị phần đỉnh cột
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#ffffff',
        elevation: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 16,
    },
});

export default BarChartComponent;
