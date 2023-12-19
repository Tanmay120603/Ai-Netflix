import Body from "./components/Body"
import {Provider} from "react-redux"
import appStore from "./utils/store"
import "./App.css"

function App(){
  return(
    <Provider store={appStore}>
    <Body></Body>
    </Provider>
  )
}

export default App
