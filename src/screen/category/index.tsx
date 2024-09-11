import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { DataTable, TextInput } from 'react-native-paper';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MainLayout from '../../infrastructure/common/layouts/main-layout';
import { PopoverAction } from '../../infrastructure/common/controls/action';
import { Layout, Popover } from '@ui-kitten/components';

const data = [
    { id: "BMK5", name: 'Máy khoan đá BMK5', category: 'Máy khoan thuỷ lực', role: 'Admin' },
    { id: "ZGYX-415	", name: 'Máy khoan đá ZGYX-415', category: 'Máy khoan điện', role: 'User' },
    { id: "ZGYX-415-1", name: 'Máy khoan đá tự hành ZGYX-415-1', category: 'Máy khoan điện', role: 'Editor' },
];

const CategoryScreen = ({ navigation }: any) => {
    const [value, setValue] = useState<string>("");
    const [visible, setVisible] = React.useState(false);
    const onChange = (value: string) => {
        setValue(value || "");
    }
    const onCreate = () => {
        navigation.navigate("AddCategoryScreen");
    }
    const onUpdate = () => {
        navigation.navigate("ViewCategoryScreen");
    }
    const onDelete = () => {
        Alert.alert('Xóa danh mục', 'Bạn muốn xóa danh mục?', [
            {
                text: 'Hủy',
                style: 'cancel',
            },
            {
                text: 'Xóa',
            }
        ]);
    }

    const renderToggleButton = (): React.ReactElement => (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Foundation name="indent-more" size={16} color="#2b2b2b" />
        </TouchableOpacity >
    );

    return (
        <MainLayout>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Danh mục máy móc</Text>
                        <TouchableOpacity onPress={onCreate} style={styles.btnStyle}>
                            <Text style={styles.fontStyle}> Thêm mới</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        label="Tìm kiếm theo tên"
                        value={value}
                        onChangeText={onChange}
                        mode="outlined"
                        style={styles.inputStyle}
                        placeholderTextColor={"#474747"}
                    />
                    <View style={styles.tableContainer}>
                        <ScrollView horizontal>
                            <View style={styles.tableWrapper}>
                                <DataTable>
                                    <DataTable.Header>
                                        <DataTable.Title>Tên danh mục</DataTable.Title>

                                    </DataTable.Header>

                                    {data.map((item, index) => (
                                        <DataTable.Row key={index}>
                                            <DataTable.Cell>{item.category}</DataTable.Cell>
                                        </DataTable.Row>
                                    ))}
                                </DataTable>
                            </View>
                        </ScrollView>

                        {/* Cột cố định */}
                        <View style={styles.fixedColumn}>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title style={styles.fixedColumnHeader}>Thao tác</DataTable.Title>
                                </DataTable.Header>
                                {data.map((_item, index) => (
                                    <DataTable.Row key={index}>
                                        <DataTable.Cell style={styles.fixedCell}>
                                            <View style={styles.contentPopover}>
                                                <TouchableOpacity onPress={onUpdate} style={styles.flexRow}>
                                                    <Feather name="edit" size={16} color="#3586ff" />
                                                    <TouchableOpacity onPress={onUpdate}>
                                                        <Text style={{ fontSize: 16, color: "#3586ff" }}>
                                                            Sửa
                                                        </Text>
                                                    </TouchableOpacity>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={onDelete} style={styles.flexRow}>
                                                    <AntDesign name="delete" size={16} color="#ff3737" />
                                                    <Text style={{ fontSize: 16, color: "#ff3737" }}>
                                                        Xóa
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                        </DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                            </DataTable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </MainLayout>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 12
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    tableContainer: {
        flexDirection: 'row',
        borderColor: '#3eb1fd',
        borderWidth: 1
    },
    tableWrapper: {
        flex: 1,
        marginRight: 80
    },
    fixedColumn: {
        width: 80,
        backgroundColor: '#fff',
        borderLeftWidth: 1,
        borderLeftColor: '#ddd',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
    },
    fixedColumnHeader: {
        textAlign: 'center',
        width: '100%',
    },
    fixedCell: {
        width: 80,
        display: "flex",
        justifyContent: "center",
    },
    search: {
        display: "flex",
        flexDirection: 'column',
    },
    inputStyle: {
        backgroundColor: '#fff', // Đặt màu nền cho input
    },
    fontStyle: {
        color: "#ffffff",
        fontFamily: "Roboto Regular",
        fontWeight: "900",
    },
    btnStyle: {
        backgroundColor: "#3eb1fd",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    contentPopover: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    flexRow: {
        flexDirection: "row",
        gap: 4
    }
});
export default CategoryScreen