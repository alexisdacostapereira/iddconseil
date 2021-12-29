import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`

  min-height: 100vh;
  
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormWrap = styled.div`
  background: #010101;
  max-width: 1000px;
  //height: auto;
  width: 100%;
  //z-index: 1;
  display: block;
  //margin: 40px auto;
  padding: 40px 20px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  color: white;
  //margin-top: 100px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  justify-content: center;
`;

export const Form = styled.form`
 display:grid;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  width: 450px;
  height: 40px;
`;

export const FormTextArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  width: 450px;
  height: 266px;
  margin-top: 5px;
`;

export const FormLeft = styled.div`
 grid-column: 1/2;
`

export const FormRight = styled.div`
 grid-column: 2/3;
`

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  width: 400px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  
  
`;

export const DivButton = styled.div `
    display: flex;
  justify-content: center;
  align-items: center;
  
`