import { HomeHeader, Button, LoadMoreBtn } from "./Home.styled";
import { useState, useEffect } from "react";
import * as getUsersApi from "../services/getUsers-api";
import UsersList from "../components/UsersList";

const Home = () => {
	const [users, setUsers] = useState([]);
	const limit = 9;
  const [cards, setCards] = useState(limit);

  useEffect(() => {
    const fetchFunc = async (cards) => {
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
      <HomeHeader>Roman Pyryn test</HomeHeader>
      <Button to={`tweets`}>tweets</Button>
      {users.length > 0 && <UsersList onData={users} />}
      {users.length >= cards && (
        <LoadMoreBtn onClick={handleLoamoreClick}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default Home;
