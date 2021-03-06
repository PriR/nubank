import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Content, Card, CardHeader, CardIconRight, CardName, CardContent, CardFooter,
Title, Description, Annotation } from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main() {
    let offset = 0;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                }
            }
        ],
        { useNativeDriver: true },
    )

    function onHandlerStateChanged(event) {
        if(event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            translateY.setOffset(offset);
            translateY.setOffset(0);

            if(translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 600 : 0,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                offset = opened ? 600 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return (
        <Container>
            <Header />

            <Content>
                <Menu translateY={translateY} />

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                    <Card style={{
                        transform: [{
                            translateY: translateY.interpolate({
                                inputRange: [0, 520],
                                outputRange: [0, 520],
                                extrapolate: 'clamp'
                            })
                        }]
                    }}>
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666" />
                            <CardName>NuConta</CardName>
                            <CardIconRight>
                                <Icon name="visibility-off" size={28} color="#666" />
                            </CardIconRight>
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$ 10.598,87</Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Transferência de R$ 10,00 recebida de Elis Benedetti hoje às 10:00h
                            </Annotation>
                        </CardFooter>
                    </Card>
                </PanGestureHandler>
            </Content>

            <Tabs translateY={translateY} />
        </Container>
    );
}
