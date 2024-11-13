import "../App.css";

//Import user component
import User from "./User";
const users = 20;

function App() {
  const userComponents = [];

  for (let i = 1; i <= users; i++) {
    userComponents.push(<User id={i} />);
  }

  return(
  <>
    <h1>Users in my DB </h1>
    {userComponents}
  </>)
}

export default App;
