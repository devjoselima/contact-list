import { Provider } from 'react-redux';

import Header from './components/Header';
import ContactList from './containers/ContactList';
import store from './store';

import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Header />
        <ContactList />
      </Container>
    </Provider>
  );
}

export default App;
