import ItemDate from './components/ItemDate';
import './App.css';

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
      title: 'Niqrma',
      amount: 130,
      date: new Date(2022, 8, 10)
    },
    {
      id: 'p3',
      title: 'Nirwefsema',
      amount: 1040,
      date: new Date(2024, 8, 10)
    },
    {
      id: 'p4',
      title: 'Nirmaggg',
      amount: 1002,
      date: new Date(2023, 8, 10)
    },


  ]
  return (
    <div>
      < Products item={products} />
    </div>


  );
}

export default App;
