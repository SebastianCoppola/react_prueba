import "./App.css";
import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductsView from "./views/ProductsView";

function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <ProductsView />
    </>
  );
}

export default App;
