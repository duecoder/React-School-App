import styled from 'styled-components';
import {
  iconColor,
  lighterColor,
  primaryColor,
  successColor,
} from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 18px;
  }

  input {
    height: 40px;
    width: 60%;
    border: 1px solid ${iconColor};
    border-radius: 5px;
    margin-top: 5px;
    font-size: 15px;
    background-color: ${primaryColor};

    &:focus {
      border: 2px solid ${iconColor};
      background-color: ${lighterColor};
    }
  }
  button {
    height: 40px;
    width: 60%;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 5px;
  }
`;
