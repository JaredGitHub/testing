import React from "react";

function User({ id }) {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUserData(data);
      };

      fetchData();
    },
    [id]
  );

  if(!userData)
  {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <br />
    </div>
  );
}

export default User;
