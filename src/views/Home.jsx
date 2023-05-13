import { HomeHeader, HomeSubHeader, Button } from './Home.styled';

const Home = () => {
  return (
    <>
      <HomeHeader>Roman Pyryn Test Work</HomeHeader>
      <HomeSubHeader>Social Network</HomeSubHeader>
      <Button to={`tweets`}>tweets</Button>
    </>
  );
};

export default Home;
