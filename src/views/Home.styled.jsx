import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeHeader = styled.h1`
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 50px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  cursor: pointer;
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
`;

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
