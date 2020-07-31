import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'
import P404 from './pages/404'

//Desafio master blaster na descrição / quase finalizando
// const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/" component={Home} exact />
  <Route path="/cadastro/Video" component={CadastroVideo} />
  <Route path="/cadastro/Categoria" component={CadastroCategoria} />
  <Route component={P404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);