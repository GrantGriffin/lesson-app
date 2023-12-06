
import './App.css';

function App() {
  // fetch data from the api https://dummyjson.com/ on mount to display /products

  // hints:
  // trycatch
  // use .then OR an async function to wait for the server to give information back
  // remember you have to parse the json
  // parsing json is also takes a variant amount of time and will need to be awaited or promise chained

  // how are you going to store your results?
  // how to we pass those stored results into a component
  // what method to we use to loop over an array of data

  // are you console logging your data as you go to get an idea of what it looks like?
  // what is the "contract" of the ProductItem component?
  // are you meeting that contract?
  // is the ProductItem component getting just one of your product items? (*cough* console.log the props)

  // data flows like a pipe and you must check your pipe from the source all the way to it display and make sure it gets there.

  return (
    <div className="App">
      1. write a component that takes incoming data and displays each record in a ProductItem component
      2. Add a search feature that fires a request with the search parameter and updates the product list
    </div>
  );
}

export default App;
