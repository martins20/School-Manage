import styled from 'styled-components';
import * as colors from '../../config/colors';

export const StudentContainer = styled.div`
  width: 90%;
  min-width: 500px;
  max-width: 1400px;
  margin: 100px auto;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${colors.primaryColor};
  font-size: 2.5em;
`;
