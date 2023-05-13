import { useState, useEffect } from 'react';
import { addFollower } from '../../services/getUsers-api';
import {
  UserCard,
  TopBox,
	Logo,
	UserBox,
  User,
  InfoBox,
  Tweets,
  Followers,
  Button,
} from './Card.styled';

function Card({ onData }) {
  const [followings, setFollowings] = useState(false);
  const [user, setUser] = useState(onData);
  const { id, avatar, tweets, followers } = user;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`${id}`));
    if (items) {
      setFollowings(items);
    }
  }, [id]);

  const handleClick = async () => {
    setFollowings(!followings);
    localStorage.setItem(`${id}`, JSON.stringify(!followings));
    const editedValue = followings
      ? { followers: followers - 1 }
      : { followers: followers + 1 };
    const newUser = await addFollower(id, editedValue);
    setUser(newUser);
  };

  return (
    <>
      <UserCard>
        <TopBox>
          <Logo src="./img/logo.png" alt="logo" />
					<UserBox>
						<User src={avatar} alt="user" />
					</UserBox>
        </TopBox>
        <InfoBox>
          <Tweets>{tweets} tweets</Tweets>
          <Followers>
            {String(followers).length > 3
              ? String(followers).slice(0, -3) +
                ',' +
                String(followers).slice(-3)
              : followers}{' '}
            Followers
          </Followers>
          <Button
            onClick={handleClick}
            className={followings ? 'following' : ''}
          >
            {followings ? 'Following' : 'Follow'}
          </Button>
        </InfoBox>
      </UserCard>
    </>
  );
}

export default Card;
