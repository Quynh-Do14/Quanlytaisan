import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { DataTable, TextInput } from 'react-native-paper';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MainLayout from '../../infrastructure/common/layouts/main-layout';
import { IndexPath, Select, SelectItem } from '@ui-kitten/components';

const data = [
    { id: "CLG855H", name: 'Bảo dưỡng', description: 'Máy khoan thuỷ lực', start: '2024-05-05', end: '2024-05-05' },
    { id: "ZGYX-415	", name: 'Bảo dưỡng', description: 'Máy khoan điện', start: '2024-05-05', end: '2024-05-05' },
    { id: "ZGYX-415-1", name: 'Bảo dưỡng máy khoan', description: 'Máy khoan điện', start: '2024-05-05', end: '2024-05-05' },
];

const MaintenanceScreen = ({ navigation }: any) => {
    const [value, setValue] = useState<string>("");
    const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>(new IndexPath(0));

    const [visible, setVisible] = React.useState(false);
    const onChange = (value: string) => {
        setValue(value || "");
    }
    const onCreate = () => {
        navigation.navigate("AddMaintenanceScreen");
    }
    const onUpdate = () => {
        navigation.navigate("ViewMaintenanceScreen");
    }
    const onDelete = () => {
        Alert.alert('Xóa bản ghi', 'Bạn muốn xóa bản ghi?', [
            {
                text: 'Hủy',
                style: 'cancel',
            },
            {
                text: 'Xóa',
            }
        ]);
    }

    return (
        <MainLayout>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Bảo dưỡng</Text>
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
                    <Select
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}
                        style={styles.inputStyle}
                    >
                        <SelectItem title='Tất cả' />
                        <SelectItem title='Máy khoan' />
                        <SelectItem title='Máy xúc' />
                        <SelectItem title='Xe vận tải' />
                    </Select>

                    <View style={styles.tableContainer}>
                        <ScrollView horizontal>
                            <View style={styles.tableWrapper}>
                                <DataTable>
                                    <DataTable.Header>
                                        <DataTable.Title style={{ width: 200 }}>Tiêu đề</DataTable.Title>
                                        <DataTable.Title style={{ width: 100 }}>Mã</DataTable.Title>
                                        <DataTable.Title style={{ width: 200 }}>Mô tả</DataTable.Title>
                                        <DataTable.Title style={{ width: 150 }}>Thời gian bắt đầu</DataTable.Title>
                                        <DataTable.Title style={{ width: 150 }}>Thời gian kết thúc</DataTable.Title>
                                    </DataTable.Header>

                                    {data.map((item, index) => (
                                        <DataTable.Row key={index}>
                                            <DataTable.Cell style={{ width: 200 }}>{item.name}</DataTable.Cell>
                                            <DataTable.Cell style={{ width: 100 }}>{item.id}</DataTable.Cell>
                                            <DataTable.Cell style={{ width: 200 }}>{item.description}</DataTable.Cell>
                                            <DataTable.Cell style={{ width: 150 }}>{item.start}</DataTable.Cell>
                                            <DataTable.Cell style={{ width: 150 }}>{item.end}</DataTable.Cell>

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
export default MaintenanceScreen