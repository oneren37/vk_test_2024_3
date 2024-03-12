import {Cart} from "../../pages";
import '@vkontakte/vkui/dist/vkui.css';
import {AppRoot} from "@vkontakte/vkui";
import { Provider } from 'react-redux';
import { store } from '../model';

function App() {
  return (
      <Provider store={store}>
          <AppRoot>
            <Cart />
          </AppRoot>
      </Provider>
  );
}

export default App;
