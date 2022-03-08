import Card from "./components/Card";

const App = () => {
  return (
    <>
      {Array.from({ length: 7 }).map(card => (
        <Card />
      ))}
    </>
  );
};

export default App;
