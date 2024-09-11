/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Props = {
    label: string,
    attribute: string,
    isRequired: boolean,
    setData: Function,
    dataAttribute?: any,
    validate: any,
    setValidate: Function,
    submittedTime: any,
    listArray: Array<any>,
}
const SelectCommon = (props: Props) => {
    const {
        label,
        attribute,
        isRequired,
        setData,
        dataAttribute,
        validate,
        setValidate,
        submittedTime,
        listArray,
    } = props;
    const [valueInput, setValueInput] = useState<number>();

    const labelLower = label?.toLowerCase();
    const pickerRef = useRef<any>();

    const validateEvent = (isImplicitChange: boolean = false) => {
        let checkValidate
    }

    const onChange = (value: number, itemIndex: number) => {
        setValueInput(value);
        setData({
            [attribute]: value || ''
        });
        validateEvent(false)
    };

    useEffect(() => {
        setValueInput(dataAttribute || '');

    }, [dataAttribute]);

    useEffect(() => {
        if (submittedTime != null) {
            validateEvent(true);
        }
    }, [submittedTime]);

    return (
        <KeyboardAvoidingView>
            <View>
                <View
                    style={
                        validate[attribute]?.isError && styles.errorStyle
                    }
                >
                    <Picker
                        ref={pickerRef}
                        selectedValue={valueInput}
                        onValueChange={onChange}
                        style={[{
                            padding: 0,
                            color: "#222222",
                            fontFamily: "Roboto Regular",
                            fontWeight: "900",

                        }, styles.inputStyle]}
                        dropdownIconColor={"#222222"}
                        mode='dropdown'
                        placeholder='Chọn giới tính'
                    >
                        <Picker.Item enabled={false} color={"#1d86dc"} label={label} value="" />
                        {
                            listArray.map((it, index) => {
                                return (
                                    <Picker.Item key={index} label={it.label} value={it.value} />
                                )
                            })
                        }
                    </Picker>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
};
export default SelectCommon;
const styles = StyleSheet.create({
    fontStyle: {
        color: "#FFFFFF",
        fontFamily: "Roboto Regular",
        fontWeight: "900",
    },

    labelStyle: {
        color: "#D0FD3E",
        fontFamily: "Roboto Regular",
        fontWeight: "600",
        fontSize: 11,
        position: "absolute",
        top: -4
    },

    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "#2C2C2E",
        backgroundColor: "#ebebeb"
    },
    btnStyle: {
        backgroundColor: "#D0FD3E",
        paddingVertical: 16,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    errorStyle: {
        borderBottomColor: "#f61a1a",
        borderBottomWidth: 1,
    }
})