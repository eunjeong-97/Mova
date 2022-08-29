import React from 'react';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export default ({ navigation }) => {
    return (
        <Container>
            <LottieView autoPlay loop={false} source={require('../../assets/ico/splash.json')} onAnimationFinish={() => {
                // navigation.reset({ index: 0, routes: [{ name: "Stack" }] });
                navigation.navigate('ScreenA')
            }} />
        </Container>
    )
}

const Container = styled.View`
    flex:1;
    background-color:black;
`