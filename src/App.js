import ItemDate from './components/ItemDate';
import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products';
function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 130,
      date: new Date(2022, 8, 10)
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 1040,
      date: new Date(2024, 8, 10)
    },
    {
      id: 'p4',
      title: 'Tide Excel',
      amount: 1002,
      date: new Date(2023, 8, 10)
    },


  ];



  function printProductDate(data) {
    console.log("This is in APP.js")
    console.log(data)
  }
  return (
    <div>
      <NewProduct printProduct={ printProductDate } />
      < Products item={ products } />
    </div>


  );
}

export default App;
