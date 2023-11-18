import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "Nilesh",
  //   age: 24,
  //   address: {
  //     city: "Banaglore",
  //     state: "Karnataka",
  //     country: "India"
  //   }
  // }

  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind</h1>
      <Card username = "Sarah" post = "Staf Engineer"/>
      <Card username = "Anihiya" />
    </>
  );
}

export default App;
