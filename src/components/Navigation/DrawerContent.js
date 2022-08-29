import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

import { ICO_ARROW, ICO_FILTER, ICO_PROFILE, ICO_NOTICE } from '../UI/SvgBox'
import Container from '../UI/Container';
import Headers from '../UI/Headers';

const settings = [
    { title: '알림 설정', ico: <ICO_NOTICE width={20} />, callback: () => console.log('알림 설정') },
    { title: '내가 찜한 컨텐츠', ico: <ICO_FILTER width={20} />, callback: () => console.log('내가 찜한 컨텐츠') },
    { title: '계정', ico: <ICO_PROFILE width={20} />, callback: () => console.log('계정') }
]

export default ({ navigation }) => {
    const Setting = ({ item: { title, ico, callback } }) => {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <SettingWrap>
                    <SettingLeft>
                        {ico}
                        <Text>{title}</Text>
                    </SettingLeft>
                    <ICO_ARROW />
                </SettingWrap>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <Container>
            <Headers navigation={navigation} back title='프로필 설정' />
            <Content>
                <Section>
                    <Title>프로필관리</Title>
                    <CardWrap>
                        <Card color='tomato' />
                        <Card color='orange' />
                        <Card color='teal' />
                        <Card color='blue' />
                    </CardWrap>
                </Section>
                <Section>
                    {settings.map((item, index) => <Setting item={item} key={String(index)} />)}
                </Section>
                <TouchableWithoutFeedback onPress={() => console.log('로그아웃')}>
                    <Logout>로그아웃</Logout>
                </TouchableWithoutFeedback>
            </Content>
        </Container>
    )
}

const Content = styled.View`
    flex:1;
`

const Section = styled.View`
    justify-content:center;
    padding: 20px;
`

const Title = styled.Text`
    font-size:18px;
    color:#FFFFFF;
    font-weight:700;
    margin-bottom:20px;
`

const CardWrap = styled.View`
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`

const Card = styled.View`
    width: 60px;
    height:60px;
    background-color: ${props => props.color};
`

const Text = styled.Text`
    font-size:16px;
    color:#FFFFFF;
    margin-left:10px;
`

const Logout = styled(Text)`
    width:100%;
    text-align:center;
`

const SettingLeft = styled.View`
    flex-direction:row;
`

const SettingWrap = styled.View`
    width:100%;
    height:70px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:#212121;
    border-radius:10px;
    margin-bottom:10px;
    padding: 20px;
`