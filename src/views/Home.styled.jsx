import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeHeader = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 250px;
`;

export const HomeSubHeader = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  color: #4b2a99;
  margin-top: 30px;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin-top: 75px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 54px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  color: #ebd8ff;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
