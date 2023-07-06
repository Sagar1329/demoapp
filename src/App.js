import ItemDate from './components/ItemDate';
import './App.css';
import Item from './components/Item'
import Card from './components/Card';
function App() {
  const response = [{
    itemName: "Nirma",
    itemDate: "20",
    itemMonth: "July",
    itemyear: "!990"
  }, {
    itemName: "Nirma2",
    itemDate: "201",
    itemMonth: "Jul222y",
    itemyear: "!9920"


  }, {
    itemName: "Nirm33a",
    itemDate: "203",
    itemMonth: "Ju3ly",
    itemyear: "!9903"


  }




  ]
  return (
    <Card><div><Item name={response[0].itemName}>Hemanth is chutiya</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>


      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>
      <div className="App">
        Fuck you
      </div></div></Card>


  );
}

export default App;
