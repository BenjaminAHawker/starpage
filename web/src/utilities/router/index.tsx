import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const loadRoutes = () => {

    interface context {
        [key: string]: any;
    }

    const context:context = import.meta.globEager(`../../views/*.tsx`);

    const routes = []
    let views = Object.keys(context);
    for (let key of views){
        let view = context[key].default;
        let name = key.replace(/(\.\.\/|views\/|\.tsx)/g, '');
        let path = name === "App" ? "/" : "/" + name
        routes.push(<Route exact path={path} component={view} key={'router-' + name}></Route>)
    }
    return routes
};



const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {loadRoutes()}
            </Switch>
        </Router>
    )
};

export default AppRouter;