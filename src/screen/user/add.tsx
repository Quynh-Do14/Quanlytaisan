import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MainLayout from '../../infrastructure/common/layouts/main-layout'
import { ScrollView } from 'react-native'
import InputTextCommon from '../../infrastructure/common/components/input/input-common'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectComon from '../../infrastructure/common/components/input/select-common'
import InputDateCommon from '../../infrastructure/common/components/input/input-date'

const AddUserScreen = () => {
    const [_data, _setData] = useState<any>({});
    const [validate, setValidate] = useState<any>({});
    const [submittedTime, setSubmittedTime] = useState<any>(null);
    const dataAddition = _data;
    const setDataAddition = (data: any) => {
        Object.assign(dataAddition, { ...data });
        _setData({ ...dataAddition });
    };
    const navigation = useNavigation<any>();
    const onGoBack = () => {
        navigation.goBack();
    }

    const onCreateAsync = () => {

    }
    return (
        <MainLayout>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={onGoBack}>
                            <AntDesign name="arrowleft" size={24} color="#2b2b2b" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Thêm mới người dùng</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={onCreateAsync} style={styles.btnStyleCreate}>
                            <Text style={styles.fontStyle}> Thêm mới</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onGoBack} style={styles.btnStyleCancel}>
                            <Text style={styles.fontStyle}> Hủy bỏ</Text>
                        </TouchableOpacity>
                    </View>
                    <InputTextCommon
                        label={"Tên"}
                        attribute={"category"}
                        dataAttribute={dataAddition.category}
                        isRequired={false}
                        setData={setDataAddition}
                        validate={validate}
                        setValidate={setValidate}
                        submittedTime={submittedTime}
                    />
                    <InputTextCommon
                        label={"Tên người dùng"}
                        attribute={"username"}
                        dataAttribute={dataAddition.username}
                        isRequired={false}
                        setData={setDataAddition}
                        validate={validate}
                        setValidate={setValidate}
                        submittedTime={submittedTime}
                    />
                    <InputTextCommon
                        label={"Email"}
                        attribute={"email"}
                        dataAttribute={dataAddition.email}
                        isRequired={false}
                        setData={setDataAddition}
                        validate={validate}
                        setValidate={setValidate}
                        submittedTime={submittedTime}
                    />
                    <InputTextCommon
                        label={"Số điện thoại"}
                        attribute={"phone"}
                        dataAttribute={dataAddition.phone}
                        isRequired={false}
                        setData={setDataAddition}
                        validate={validate}
                        setValidate={setValidate}
                        submittedTime={submittedTime}
                    />
                </View>
            </ScrollView>
        </MainLayout>
    )
}

export default AddUserScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 16
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
    btnContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4
    },
    fontStyle: {
        color: "#ffffff",
        fontFamily: "Roboto Regular",
        fontWeight: "900",
    },
    btnStyleCreate: {
        backgroundColor: "#3eb1fd",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    btnStyleCancel: {
        backgroundColor: "#fe2f33",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
})