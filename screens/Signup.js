import React, { useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';

import { colors } from '../components/colors';
const { primary } = colors;

// customer components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../components/Texts/RegularText';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import MsgBox from '../components/Texts/MsgBox';
import RegularButton from '../components/Buttons/RegularButton';
import PressableText from '../components/Texts/PressableText';

const Signup = () => {
    const [message, setMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);

    const handleSignup = async (credentials, setSubmitting) => {
        try {
            setMessage(null);

            // call backend

            // move to next page

            setSubmitting(false);
        } catch (error) {
            setMessage('Signup failed: ' + error.message);
            setSubmitting(false);
        }
    }

    return (
    <MainContainer>
        <KeyboardAvoidingContainer>
            <RegularText style={{ marginBottom: 25 }}>Enter your account credentials</RegularText>

            <Formik 
                initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
                onSubmit={(values, {setSubmitting}) => {
                    if(values.fullName == '' || values.email == '' || values.password == "" || values.confirmPassword == "") {
                        setMessage('Please fill in all fields');
                        setSubmitting(false);
                    } 
                    else if(values.password !== values.confirmPassword) {
                        setMessage('Passwords do not match');
                        setSubmitting(false);
                    } else {
                        handleSignup(values, setSubmitting);
                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                    <>
                        <StyledTextInput 
                            label="Full Name" 
                            icon="account" 
                            placeholder="Enter full name"
                            onChangeText={ handleChange('fullName') }
                            onBlur={ handleBlur('fullName') }
                            value={ values.fullName }
                            style={{marginBottom: 15}}
                        />

                        <StyledTextInput 
                            label="Email Address" 
                            icon="email-variant" 
                            placeholder="Enter email address"
                            keyboardType="email-address"
                            onChangeText={ handleChange('email') }
                            onBlur={ handleBlur('email') }
                            value={ values.email }
                            style={{marginBottom: 15}}
                        />

                        <StyledTextInput 
                            label="Password" 
                            icon="lock-open" 
                            placeholder="Enter password"
                            onChangeText={ handleChange('password') }
                            onBlur={ handleBlur('password') }
                            value={ values.password }
                            isPassword={true}
                            style={{marginBottom: 15}}
                        />

                        <StyledTextInput 
                            label="Confirm Password" 
                            icon="lock-open" 
                            placeholder="Enter password"
                            onChangeText={ handleChange('confirmPassword') }
                            onBlur={ handleBlur('confirmPassword') }
                            value={ values.confirmPassword }
                            isPassword={true}
                            style={{marginBottom: 15}}
                        />

                        <MsgBox style={{marginBottom: 25}} success={isSuccessMessage}>
                            { message || ' '}
                        </MsgBox>
                        {!isSubmitting && <RegularButton onPress={ handleSubmit }>Signup</RegularButton>}
                        {isSubmitting && (
                            <RegularButton disabled={ true }>
                            <ActivityIndicator size="small" color={ primary } />
                            </RegularButton>
                        )}

                            <PressableText style={{paddingVertical: 15}} onPress={() => {}}>Sign in to an existing account</PressableText>
                    </>
                )}
            </Formik>
        </KeyboardAvoidingContainer>
    </MainContainer>
)}

export default Signup;