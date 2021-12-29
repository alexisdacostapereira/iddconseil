import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  
} from './SigninElements';


const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>IDD Conseil</Icon>
          <FormContent>
          <FormH1>Information à nous renseigner </FormH1>
           <Form action='#'>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
            
          </FormContent>
          
          
        </FormWrap>
      </Container>
      
      

    </>
  );
};

export default SignIn;
