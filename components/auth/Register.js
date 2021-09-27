import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import firebase from 'firebase'

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            name: 'git '
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder='name'
                    onChangeText={(nameParameter) => this.setState({ name: nameParameter })}
                />
                <TextInput
                    placeholder='email'
                    onChangeText={(emailParameter) => this.setState({ emailParameter })}
                />
                <TextInput
                    placeholder='password' secureTextEntry='true'
                    onChangeText={(passwordParameter) => this.setState({ passwordParameter })}
                />
                <Button onPress={() => this.onSignUp()} title='Sign Up' />
            </View>
        )
    }
}

export default Register


///  USE rce snippet