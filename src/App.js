import Signin from "./components/signin";
import Navbar from "./components/Navbar";
import { useUser } from "./hooks/useUser";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ShowCount from "./components/ShowCount";

function App() {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <ComponentA />
      <ShowCount />
      <ComponentB />

      <br />
      <br />

      <hr />

      <br />
      <br />

      <Navbar />
      <Signin />
    </>
  );
}

export default App;
