import { useState, useEffect } from 'react';
import * as getUsersApi from '../services/getUsers-api';
import { BiArrowBack } from 'react-icons/bi';
import UsersList from '../components/UsersList';
import { BackBtn, LoadMoreBtn } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const limit = 9;
  const [cards, setCards] = useState(limit);

  useEffect(() => {
    const fetchFunc = async cards => {
      try {
        const results = await getUsersApi.getUsers(cards);
        const items = results.data;
        setUsers(items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFunc(cards);
  }, [cards]);

  const handleLoamoreClick = () => {
    setCards(cards + limit);
  };
  return (
    <>
      <BackBtn to={`/`}><BiArrowBack className='back-arrow' />Back</BackBtn>
      {users.length > 0 && <UsersList onData={users} />}
      {users.length >= cards && (
        <LoadMoreBtn onClick={handleLoamoreClick}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default Tweets;
