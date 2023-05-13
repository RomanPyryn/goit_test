import { useState, useEffect } from 'react';
import * as getUsersApi from '../services/getUsers-api';
import UsersList from '../components/UsersList';
import { Button, LoadMoreBtn } from './Tweets.styled';

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
      <Button to={`/`}>Back</Button>
      {users.length > 0 && <UsersList onData={users} />}
      {users.length >= cards && (
        <LoadMoreBtn onClick={handleLoamoreClick}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default Tweets;
