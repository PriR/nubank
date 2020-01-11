import React from 'react';
import { Container, Code, Nav, NavItem, NavText, NavIcon, SignOutButton, SignOutButtonText } from './styles';

import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Code>
                
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                    <NavIcon>
                        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                    <NavIcon>
                        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão</NavText>
                    <NavIcon>
                        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do app</NavText>
                    <NavIcon>
                        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                    </NavIcon>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}} >
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}

{/* <QRCode
                    value="https://rocketseat.com.br"
                    size={80}
                    fgColor="#FFF"
                    bgColor="#8B10AE"
                /> */}

