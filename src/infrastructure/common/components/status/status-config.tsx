import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type Props = {
    status: number
}
const StatusConfigComon = (props: Props) => {
    const { status } = props;
    switch (status) {
        case 1:
            return (
                <View style={styles.blue}>
                    <Text style={styles.font}>Đang vận hành</Text>
                </View>
            )
        case 2:
            return (
                <View style={styles.green}>
                    <Text style={styles.font}>Sẵn sàng sử dụng</Text>
                </View>
            )
        case 3:
            return (
                <View style={styles.orange}>
                    <Text style={styles.font}>Đang bảo dưỡng</Text>
                </View>
            )
        default:
            return (
                <View style={styles.grey}>
                    <Text style={styles.font}>Chưa có trạng thái</Text>
                </View>
            )
    }

}

export default StatusConfigComon

const styles = StyleSheet.create({
    font: {
        color: "#FFF"
    },
    blue: {
        backgroundColor: "#2196f3",
        width: '100%',
        height: '100%',
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    green: {
        backgroundColor: "#4caf50",
        width: '100%',
        height: '100%',
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    orange: {
        backgroundColor: "#ff6347",
        width: '100%',
        height: '100%',
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    grey: {
        backgroundColor: "#7d7d7d",
        width: '100%',
        height: '100%',
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    }
})