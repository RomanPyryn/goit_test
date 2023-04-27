// import PropTypes from 'prop-types';
import Card from "../Card";
import { UserList, UserItem, UserName } from "./UsersList.styled";

const UsersList = ({ onData }) => {
  return (
    <UserList>
      {onData.map((item) => (
        <UserItem key={item.id}>
          <Card onData={item}></Card>
          <UserName>{item.user}</UserName>
        </UserItem>
      ))}
    </UserList>
  );
};

// UsersList.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//   }),
// };

export default UsersList;
