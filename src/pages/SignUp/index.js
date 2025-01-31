import React from 'react'
import { Platform } from 'react-native'

import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from '../SignIn/styles'

export default function SignUp(){
    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''} //no Android já acontece por padrão
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Nome"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    )
}