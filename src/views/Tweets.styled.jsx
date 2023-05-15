import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin-top: 25px;
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

export const LoadMoreBtn = styled.button`
  display: block;
  text-align: center;
  margin: 25px auto;
  width: 200px;
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

export const TweetsList = styled.ul`
  width: 500px;
  margin: 25px auto 0;
`;

export const SpinerBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
