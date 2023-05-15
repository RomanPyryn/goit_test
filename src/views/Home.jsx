import { FaTwitter } from 'react-icons/fa';
import { HomeHeader, HomeSubHeader, Button } from './Home.styled';

const Home = () => {
  return (
    <>
      <HomeHeader>Roman Pyryn Test Work</HomeHeader>
      <HomeSubHeader>Social Network app</HomeSubHeader>
      <Button to={`tweets`}>
        <FaTwitter /> tweets
      </Button>
    </>
  );
};

export default Home;
