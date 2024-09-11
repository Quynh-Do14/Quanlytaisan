/* eslint-disable react-hooks/exhaustive-deps */
import { Datepicker } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';

type Props = {
    label: string,
    attribute: string,
    isRequired: boolean,
    setData: Function,
    dataAttribute?: any,
    validate: any,
    setValidate: Function,
    submittedTime?: any,
}
const InputDateCommon = (props: Props) => {
    const {
        label,
        attribute,
        isRequired,
        setData,
        dataAttribute,
        validate,
        setValidate,
        submittedTime
    } = props;
    const [value, setValue] = useState<string>("");
    const labelLower = label?.toLowerCase();

    const onBlur = (isImplicitChange: boolean = false) => {
    }

    const onChange = (value: string) => {
        setValue(value || "");
        setData({
            [attribute]: value || ''
        });

    };

    useEffect(() => {
        setValue(dataAttribute || '');

    }, [dataAttribute]);


    useEffect(() => {
        if (submittedTime != null) {
            onBlur(true);
        }
    }, [submittedTime]);

    return (
        <KeyboardAvoidingView>
            <View>
                {/* <Text style={styles.labelStyle}>
                    {label}
                </Text> */}
                <View>
                    <Datepicker
                        label={`Nhập ${labelLower}`}
                        date={value}
                        onSelect={onChange}
                        onBlur={() => onBlur(false)}
                        style={[validate[attribute]?.isError && styles.errorStyle, styles.inputStyle]}
                    />
                </View>
            </View>
        </KeyboardAvoidingView >
    )
};
export default InputDateCommon;
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
    },
    btnStyle: {
        backgroundColor: "#D0FD3E",
        paddingVertical: 16,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        padding: 8,
        position: "absolute",
        right: 0,
        top: 4
    },
    errorStyle: {
        borderBottomColor: "#f61a1a",
    }
})