import { useState, useEffect } from "react";
import * as getUsersApi from "../../services/getUsers-api";
import {
  UserCard,
  User,
  Logo,
  Picture,
  Line,
  Info,
  Tweets,
  Followers,
  Button,
} from "./Card.styled";

function Card({ onData }) {
  const [followings, setFollowings] = useState(false);
  const { id, avatar, tweets, followers } = onData;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`${id}`));
    if (items) {
      setFollowings(items);
    }
  }, [id]);

  const handleClick = async () => {
    setFollowings(!followings);
    localStorage.setItem(`${id}`, JSON.stringify(!followings));
    const editedValue = { followers: followers + 1 };
    await getUsersApi.addFollower(editedValue, id);
  };

  return (
    <>
      <UserCard>
				<User src={avatar} alt="user" />
        <Logo src="../../../public/img/logo.png" alt="logo" />
        <Picture src="./img/picture.png" alt="main_picture" />
        <Line></Line>
        <Info>
          <Tweets>{tweets} tweets</Tweets>
          <Followers>{followers} Followers</Followers>
          <Button
            onClick={handleClick}
            className={followings ? "following" : ""}
          >
            {followings ? "Following" : "Follow"}
          </Button>
        </Info>
      </UserCard>
    </>
  );
}

export default Card;
