import React from 'react';
import {
    Container, Code, 
    Account, AccountItem, Title, Description,
    Nav, NavItem, NavText, NavIcon,
    SignOutButton, SignOutButtonText
} from './styles';

import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 300],
                outputRange: [0, 1]
            })
        }}>
            <Code>
            <QRCode
                    value="https://rocketseat.com.br"
                    size={80}
                    fgColor="#FFF"
                    bgColor="#8B10AE"
                />
            </Code>
            <Account>
                <AccountItem>
                    <Title>Banco</Title>
                    <Description>260 - Nu Pagamentos S.A.</Description>
                </AccountItem>
                <AccountItem>
                    <Title>Agência</Title>
                    <Description>0001</Description>
                </AccountItem>
                <AccountItem>
                    <Title>Conta</Title>
                    <Description>4356879-8</Description>
                </AccountItem>
            </Account>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                    <NavIcon>
                        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Pedir função débito</NavText>
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
                    <Icon name="attach-money" size={20} color="#FFF" />
                    <NavText>Configurar NuConta</NavText>
                    <NavIcon>
                        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar Cartão</NavText>
                    <NavIcon>
                        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <Icon name="store" size={20} color="#FFF" />
                    <NavText>Pedir Conta PJ</NavText>
                    <NavIcon>
                        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <Icon name="star-border" size={20} color="#FFF" />
                    <NavText>Participe da nossa promo</NavText>
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
                <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}
