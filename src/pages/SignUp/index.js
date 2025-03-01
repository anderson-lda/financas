import React, { useContext, useState } from 'react'
import { ActivityIndicator, Platform } from 'react-native'

import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from '../SignIn/styles'
import { AuthContext } from '../../contexts/auth'

export default function SignUp(){
    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignUp(){
        if(nome === '' || email === '' || password === '') return
        signUp(nome,email,password)
    }
    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''} //no Android já acontece por padrão
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text)=>setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>
            </Container>
        </Background>
    )
}