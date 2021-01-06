import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'normalize.css/normalize.css';
 
import './styles/styles.scss'

class App extends React.Component{
    render(){
        return(
            <div>
           this is the boiler plate
            </div>
        );
    }
}

ReactDOM.render( <App />  , document.getElementById('app'));