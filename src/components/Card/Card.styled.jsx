import styled from "@emotion/styled";

export const UserCard = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const User = styled.img`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Picture = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  margin-top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 36px;
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  background-color: #ebd8ff;
  &.following {
    background-color: #5cd3a8;
  }
`;
