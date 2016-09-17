import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import ListCards from './todo/ListCards';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


// Método que renderiza os componentes do React no `index.html`
ReactDOM.render(
  <Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={ListCards}/>
		<Route path="/lista" component={ListCards}/> //   localhost/lista
	</Route>
	
	
  </Router>, // Qual componente vai ser renderizado
  document.getElementById('root') // Onde o componente vai ser renderizado
);
