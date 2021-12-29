import React, { useState } from 'react'
import { Container, Icon, FormWrap, FormH1,Form,FormLabel,FormInput, FormRight, FormLeft, FormTextArea, FormButton, DivButton } from '../ContactForm/ContactFormElements'
import emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha'

const ContactForm = () => {
    
    

    const [verified, setVerified] = useState(false)

    function sendEmail(e){
        if (verified === true){
            
      
            emailjs.sendForm('service_o8g9hhb', 'template_z00vrhf', e.target, 'user_Qu8JcJn3U8RSToo077usd')
              .then((result) => {
                  alert('Merci, nous avons recu votre demande !')
                  console.log(result.text);
                  e.target.reset()
              }, (error) => {
                  console.log(error.text);
                  
              });
        } else{
            alert('Veuillez vérifier que vous êtes bien humain!')
            e.preventDefault();
        }
    }

    

    function callback() {
        console.log('Done!!!!');
      };

    function verifyCallback (response) {
        if (response){
           // setVerified(true)
         }
    }

    return (
        <>
            <Container>
                <Icon to='/'>
                    IDD Conseil
                </Icon>
                
                <FormWrap>
                    <FormH1>
                        Informations à nous renseigner
                    </FormH1>
                    <Form onSubmit={sendEmail}>
                        <FormLeft>
                            <FormLabel htmlFor='for'>Vous êtes : </FormLabel>
                            <FormInput name='entreprise' type='name' placeholder="Particulier, Professionnel..."required />
                            <FormLabel htmlFor='for'>Email : </FormLabel>
                            <FormInput name='email' type='email' required />
                            <FormLabel htmlFor='for'>Nom : </FormLabel>
                            <FormInput name='nom' type='name' required />
                            <FormLabel htmlFor='for'>Prénom : </FormLabel>
                            <FormInput name='prénom' type='name' required />
                            <FormLabel htmlFor='for'>Téléphone : </FormLabel>
                            <FormInput name='tel'type='name' required />
                        </FormLeft>
                        <FormRight>
                            <FormLabel htmlFor='for'>Nom de votre site : </FormLabel>
                            <FormInput name='site'type='name' required />
                            <FormLabel htmlFor='for'>Description : </FormLabel>
                            <FormTextArea name='description'type="text" rows="5"/>
                            
                            

                        </FormRight>
                        <DivButton>
                        <FormButton type='submit'>Envoyer votre demande !</FormButton>
                    </DivButton>
                    <Recaptcha sitekey="6Lfeg80bAAAAADep6MzyGUVcqDauHf7nPR7swF7m" render="explicit" onloadCallback={callback} verifyCallback={verifyCallback} />
                    </Form>
                    
                    
                </FormWrap>
                
            </Container>
            

        </>
    )
}

export default ContactForm
