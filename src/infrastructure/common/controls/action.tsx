import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Layout, Popover, Text } from '@ui-kitten/components';
import Foundation from 'react-native-vector-icons/Foundation';

type Props = {
    visible: boolean
    setVisible: Function
}
export const PopoverAction = (props: Props): React.ReactElement => {
    const { visible, setVisible } = props;

    const onAction = () => {
        setVisible(!visible)
    }
    const renderToggleButton = (): React.ReactElement => (
        <TouchableOpacity onPress={onAction}>
            <Foundation name="indent-more" size={16} color="#2b2b2b" />
        </TouchableOpacity >
    );

    return (
        <Popover
            visible={visible}
            anchor={renderToggleButton}
            fullWidth={true}
            onBackdropPress={() => setVisible(false)}
        >
            <Layout style={styles.content}>
                <Text>
                    Sửa
                </Text>
                <Text>
                    Xóa
                </Text>
            </Layout>
        </Popover>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 64,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 8,
        width: "100%"
    },
    avatar: {
        marginHorizontal: 4,
    },
});