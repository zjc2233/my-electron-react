import { MemoryRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import Routes from '@/router';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
