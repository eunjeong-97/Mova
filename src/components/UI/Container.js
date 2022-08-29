import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default ({ children, style }) => {
    return (
        <>
            <View style={{ height: getStatusBarHeight() }}>
                <StatusBar translucent barStyle='light-content' backgroundColor='black' />
            </View>
            <SafeAreaView style={[{ flex: 1, backgroundColor: 'black' }]}>{children}</SafeAreaView>
        </>
    )
}