import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import Foundation from 'react-native-vector-icons/Foundation';
import StatusConfigComon from '../../../../infrastructure/common/components/status/status-config';
const data = [
    { id: "BMK5", name: 'Máy khoan đá BMK5', category: 'Máy khoan thuỷ lực', status: 1 },
    { id: "ZGYX-415	", name: 'Máy khoan đá ZGYX-415', category: 'Máy khoan điện', status: 2 },
    { id: "ZGYX-415-1", name: 'Máy khoan đá tự hành ZGYX-415-1', category: 'Máy khoan điện', status: 3 },
];

const TableComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chi tiết</Text>
            <View style={styles.tableContainer}>
                <ScrollView horizontal>
                    <View style={styles.tableWrapper}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={{ width: 100 }}>Mã</DataTable.Title>
                                <DataTable.Title style={{ width: 200 }}>Tên</DataTable.Title>
                                <DataTable.Title style={{ width: 120 }}>Trạng thái</DataTable.Title>
                                <DataTable.Title style={{ width: 150 }}>Danh mục</DataTable.Title>
                            </DataTable.Header>

                            {data.map(item => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell style={{ width: 100 }}>{item.id}</DataTable.Cell>
                                    <DataTable.Cell style={{ width: 200 }}>{item.name}</DataTable.Cell>
                                    <DataTable.Cell style={{ width: 120 }}><StatusConfigComon status={item.status} /></DataTable.Cell>
                                    <DataTable.Cell style={{ width: 150 }}>{item.category}</DataTable.Cell>
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
                        {data.map(item => (
                            <DataTable.Row key={item.id}>
                                <DataTable.Cell style={styles.fixedCell}>
                                    <Foundation name="indent-more" size={16} color="#2b2b2b" />
                                </DataTable.Cell>
                            </DataTable.Row>
                        ))}
                    </DataTable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 16,
    },
    tableContainer: {
        flexDirection: 'row',
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
});
export default TableComponent;
