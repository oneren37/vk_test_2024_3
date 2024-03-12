import {Cart} from "../../pages";
import '@vkontakte/vkui/dist/vkui.css';
import {AppRoot} from "@vkontakte/vkui";
import { Provider } from 'react-redux';
import { store } from '../model';
import {useEffect} from "react";

function App() {

    // ------------------
    // это мне просто интересно открывал ли кто-то решение))
    useEffect(() => {
        fetch('https://58b5758b3d6dddcb.mokky.dev/ping', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date: new Date().toString() })
        })
    }, []);
    // ------------------

  return (
      <Provider store={store}>
          <AppRoot>
            <Cart />
          </AppRoot>
      </Provider>
  );
}

export default App;
