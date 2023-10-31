import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "dilshad",
      image:
        "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
