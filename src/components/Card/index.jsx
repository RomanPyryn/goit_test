import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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
  const [item, setItem] = useState(onData);
  const { id, user, avatar, tweets, followers } = item;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`${id}`));
    if (items) {
      setFollowings(items);
    }
  }, [id]);

  const handleClick = async () => {
    setFollowings(!followings);
    followings
      ? toast.info(`You are now unfollowed "${user}"!`)
      : toast.success(`You are now following "${user}"!`);
    localStorage.setItem(`${id}`, JSON.stringify(!followings));
    const editedValue = followings
      ? { followers: followers - 1 }
      : { followers: followers + 1 };
    const editedItem = await addFollower(id, editedValue);
    setItem(editedItem);
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

Card.propTypes = {
  onData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};

export default Card;
