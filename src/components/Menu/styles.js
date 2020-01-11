import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    margin: 0 30px;
`;

export const Code = styled.View`
    background: #FFF,
    padding: 10px;
    align-self: center;
    overflow: hidden;
`;

export const Account = styled.View`
    padding: 10px 0 0;
`;

export const AccountItem = styled.View`
    flex-direction: row;
    align-self: center;
    padding-top: 3px;
`;

export const Title = styled.Text`
    font-size: 13px;
    padding: 0 5px;
    color: #FFF
`;

export const Description = styled.Text`
    font-size: 13px;
    color: #FFF;
    font-family: Roboto-Medium
`;

export const Nav = styled.View`
    margin-top: 20px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.3);
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, 0.3);
`;

export const NavText = styled.Text`
    font-size: 15px;
    color: #FFF;
    margin-left: 20px;
`;

export const NavIcon = styled.View`
    margin-left: auto
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 13px;
`;

