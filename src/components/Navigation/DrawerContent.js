import React from 'react';
import styled from 'styled-components/native';

import Container from '../UI/Container';
import Headers from '../UI/Headers';

export default ({ navigation }) => {
    return (
        <Container>
            {/* <Headers navigation={navigation} back title='프로필 설정' /> */}
            <ProfileSection>
                <Title>프로필관리</Title>
                <Card color='tomato' />
                <Card color='orange' />
                <Card color='teal' />
                <Card color='blue' />
            </ProfileSection>
        </Container>
    )
}

const ProfileSection = styled.View`
    background-color:teal;
    justify-content:center;
`

const Title = styled.Text`
    font-size:16px;
    color:#FFFFFF;
    width:100%;
    align-items:center;
    background-color:tomato;
`

const Card = styled.View`
    width: 60px;
    height:60px;
    background-color: ${props => props.color};
`