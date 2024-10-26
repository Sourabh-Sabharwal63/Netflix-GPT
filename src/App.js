import { Provider } from "react-redux";
import Body from "./Component/Body"
import appStore from "./Component/utils/appStore";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}> <Body/></Provider>
   


    </div>
  );
}

export default App;
