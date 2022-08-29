import React from 'react';
import { View, Text } from 'react-native';
import Container from '../components/UI/Container';

import Headers from '../components/UI/Headers';

export default ({ navigation }) => {
    return (
        <Container>
            <Headers title='ScreenA' navigation={navigation} profile />
            <Text style={{ width: '100%', alignContent: 'center', }}>ScreenA</Text>
        </Container>
    )
}