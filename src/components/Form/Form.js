import React, { useState } from 'react';
// import {
// 	FormColumn,
// 	FormWrapper,
// 	FormInput,
// 	FormSection,
// 	FormRow,
// 	FormLabel,
// 	FormInputRow,
// 	FormMessage,
// 	FormButton,
// 	FormTitle,
// } from './FormStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({
      name,
      email,
      password,
      confirmPass,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPass('');
    setError(null);
    setSuccess('Application was submitted!');
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.4 },
    },
  };

  const formData = [
    {
      label: 'Name',
      value: name,
      onChange: (e) => setName(e.target.value),
      type: 'text',
    },
    {
      label: 'Email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: 'email',
    },
    {
      label: 'Password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: 'password',
    },
    {
      label: 'Confirm Password',
      value: confirmPass,
      onChange: (e) => setConfirmPass(e.target.value),
      type: 'password',
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Sign up</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type='submit'>Signup</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial='hidden'
                animate='animate'
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial='hidden'
                animate='animate'
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;

export const FormSection = styled.div`
  /* color: #fff; */
  padding: 160px 0;
  /* background: ${({ inverse }) =>
    inverse ? '#101522' : '#fff'}; */
  background: #101522;
`;

export const FormTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  display: flex;
`;
export const FormColumn = styled.div`
  /* margin-bottom: 15px; */
  padding: 50px;
  background: white;
  border: 20px;
  /* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
  flex: 1;
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
  }

  img {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormWrapper = styled.form`
  /* max-width: 540px; */
  padding-top: 0;
  width: 100%;
`;

export const FormMessage = styled(motion.div)`
  color: ${({ error }) => (error ? 'red' : 'green')};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;

  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;
export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;
export const FormImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) =>
    start ? 'flex-start' : 'flex-end'};
`;
export const FormImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  /* color: #fff; */
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: black;
  }
`;
