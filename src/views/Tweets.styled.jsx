import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  display: block;
  cursor: pointer;
  text-align: center;
  padding-top: 15px;
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
`;

export const TweetsList = styled.ul`
  width: 500px;
  margin: 25px auto 0;
`;

export const TweetsItem = styled.li`
  padding: 25px;
  background-color: #4b2a99;
  border-bottom: 2px solid #ebd8ff;
`;

export const TweetsHeader = styled.h2`
  font-size: 40px;
  padding: 100px 0;
  text-align: center;
  color: #ebd8ff;
`;

export const TweetsText = styled.p`
  color: #ebd8ff;
`;
