import { Provider } from "react-redux";
import Maincomp from "./Components/MainComp";
import Navbar from "./Components/Navbar/Navbar";
import store from "./Redux/Store";
function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Maincomp/>
    </Provider>
  );
}

export default App;
