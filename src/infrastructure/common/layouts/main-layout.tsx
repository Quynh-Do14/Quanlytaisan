import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Foundation from 'react-native-vector-icons/EvilIcons';
import DrawerNavigator from './draws';
const MainLayout = ({ ...props }: any) => {
    const [isDraw, setIsDraw] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            {
                isDraw
                &&
                <TouchableOpacity onPress={() => setIsDraw(false)} style={styles.overlay}>
                </TouchableOpacity>

            }
            <DrawerNavigator isDraw={isDraw} setIsDraw={setIsDraw} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setIsDraw(!isDraw)}>
                    <Foundation name="navicon" size={32} color="#ffffff" />
                </TouchableOpacity>
                <Image
                    source={require("../../../assets/images/avatar.png")}
                    resizeMode={"contain"}
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: 50,
                        borderColor: "#ffffff",
                        borderWidth: 2
                    }}
                />
            </View>

            {props.children}
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
        position: "relative",
    },
    content: {
        flex: 1
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 8,
        elevation: 2,
        backgroundColor: "#5f88d3",
    },
    textTitle: {
        color: "#1e1e1e",
        textAlign: "center",
        fontFamily: "Roboto Regular",
        fontWeight: "700",
        fontSize: 20,
    },
    btnStyle: {
        backgroundColor: "#D0FD3E",
        paddingVertical: 16,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textBtnStyle: {
        color: "#000000",
        fontFamily: "Roboto Regular",
        fontSize: 16,
        fontWeight: "900",
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#d4d4d44a',
        zIndex: 1,
    }
})

export default MainLayout