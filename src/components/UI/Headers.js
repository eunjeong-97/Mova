import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

import { ICO_BACK, ICO_CLOSE, ICO_MENU, ICO_SEARCH } from './SvgBox';

export default ({ title, back, navigation, close, profile, search }) => {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => {
                console.log('title')
                navigation.navigate('ScreenA')
            }}>
                <Title>{title}</Title>
            </TouchableWithoutFeedback>

            {!back ? null :
                <TouchableWithoutFeedback onPress={() => {
                    console.log('back')
                    if (navigation.canGoBack()) navigation.goBack();
                    else navigation.reset({ index: 0, routes: [{ name: 'Stack' }] })
                }}>
                    <Left left={20}>
                        <ICO_BACK />
                    </Left>
                </TouchableWithoutFeedback>
            }
            {!close ? null :
                <TouchableWithoutFeedback onPress={() => {
                    console.log('close')
                    if (navigation.canGoBack()) navigation.goBack();
                    else navigation.reset({ index: 0, routes: [{ name: 'Stack' }] })
                }}>
                    <Left left={20}>
                        <ICO_CLOSE />
                    </Left>
                </TouchableWithoutFeedback>
            }

            {!search ? null :
                <TouchableWithoutFeedback onPress={() => console.log('search')}>
                    <Right right={60}>
                        <ICO_SEARCH />
                    </Right>
                </TouchableWithoutFeedback>
            }
            {!profile ? null :
                <TouchableWithoutFeedback onPress={() => {
                    console.log('profile')
                    navigation.openDrawer()
                }}>
                    <Right right={20}>
                        <ICO_MENU />
                    </Right>
                </TouchableWithoutFeedback>
            }
        </Container>
    )
}

const Container = styled.View`
    position: relative;
    justify-content:center;
    align-items:center;
    height:52px;
    background-color:black;
    border-bottom: 1px solid '#F2F2F2';
`

const Title = styled.Text`
    font-size:16px;
    font-weight:bold;
    color:white;
`

const Button = styled.View`
    width: 30px;
    height:30px;
    position:absolute;
    justify-content:center;
    align-items:center;
`

const Left = styled(Button)`
    left: ${props => `${props.left}px`};
`

const Right = styled(Button)`
    right: ${props => `${props.right}px`};
`