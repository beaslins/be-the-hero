import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * Importar a página
 * Não precisa colocar index.js porque quando importamos uma pasta 
 * ele sempre procura o arquivo index automaticamente
 */
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        // Switch garante que apenas uma rota seja executada por momento
        // o Router verifica se o caminho começa com o que passamos no path, então é importando na primeira passar uma propriedade exact pra o caminho ser exatamente o q ta escrito no path pra mostrar o "Logon" por exemplo
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> 
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}