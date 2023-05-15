import styled from '@emotion/styled';

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

export const TopBox = styled.div`
  position: relative;
  width: 100%;
  height: 222px;
  background-image: url('/img/picture.png');
  background-position: center center;
  background-size: 308px 168px;
  background-repeat: no-repeat;
  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const UserBox = styled.div`
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const User = styled.img`
  position: relative;
  width: 62px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
  background-color: #4b2a99;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 238px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
`;

export const Tweets = styled.p`
  margin-top: 62px;
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
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.03;
    opacity: 0.8;
  }
  &.following {
    background-color: #5cd3a8;
  }
`;
