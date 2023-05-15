import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { getUsers } from '../services/getUsers-api';
import { BiArrowBack } from 'react-icons/bi';
import UsersList from '../components/UsersList';
import { BackBtn, SpinerBox, LoadMoreBtn } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const cardsPerPage = 9;
  const [numOfCards, setNumOfCards] = useState(cardsPerPage);

  useEffect(() => {
    const fetchFunc = async numOfCards => {
      try {
        const results = await getUsers(numOfCards);
        const items = results.data;
        setUsers(items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFunc(numOfCards);
  }, [numOfCards]);

  const handleLoamoreClick = () => {
    setNumOfCards(numOfCards + cardsPerPage);
  };
  return (
    <>
      <BackBtn to={`/`}>
        <BiArrowBack className="back-arrow" />
        Back
      </BackBtn>
      {users.length === 0 ? (
        <SpinerBox>
          <TailSpin
            color="#4b2a99"
            height={50}
            width={50}
            ariaLabel="loading"
          />
        </SpinerBox>
      ) : (
        <UsersList onData={users} />
      )}
      {users.length >= numOfCards && (
        <LoadMoreBtn onClick={handleLoamoreClick}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default Tweets;
