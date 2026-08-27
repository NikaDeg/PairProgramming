import "./App.css";
import Card from "./Card";


  const person1 = {
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 176,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
};

const person2 = {
  lastName: 'Delores ',
  firstName: 'Obrien',
  gender: 'female',
    height: 174,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
};


function App() { 

  return (
    <div className="App">
      <h1> Activity 1</h1>
      <Card firstName={person1.firstName} lastName={person1.lastName} 
      gender={person1.gender} height={person1.height} birth={person1.birth.toDateString()} picture={person1.picture}/>

      <Card firstName={person2.firstName} lastName={person2.lastName} 
      gender={person2.gender} height={person2.height} birth={person2.birth.toDateString()} picture={person2.picture} />
    </div>
  );
}

export default App;

