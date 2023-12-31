//
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import './UsersList.css'
const UsersList = (props) => {
  console.log(props.items);
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No user Found</h1>
        </Card>
      </div>
    );
  }

  return (
    <>
      <ul>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))}
      </ul>
    </>
  );
};
export default UsersList;
