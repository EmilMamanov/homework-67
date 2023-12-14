import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="Door-password">
                <div className="Screen">
                    <input type="text" value="****" readOnly />
                </div>
                <div className="Buttons">
                    btns
                </div>
                <div className="Bottom-btns">
                   bottom btns
                </div>
                alerts
            </div>
        </div>
    );
};

export default App;