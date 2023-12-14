import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    pressKey,
    deleteLastKey,
    checkPassword,
} from './features/Keyboard/KeyboardSlise.ts';
import { RootState } from './app/store.ts';
import './App.css';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const input = useSelector((state: RootState) => state.keyboard.input);
    const isCorrect = useSelector((state: RootState) => state.keyboard.isCorrect);

    const handleKeyClick = (key: string) => {
        dispatch(pressKey(key));
    };

    const handleDeleteClick = () => {
        dispatch(deleteLastKey());
    };

    const handleEnterClick = () => {
        dispatch(checkPassword());
    };

    const renderContent = () => {
        if (isCorrect === true) {
            return (
                <div className="Correct">
                    <div className="Alert">Access Granted</div>
                </div>
            );
        } else if (isCorrect === false) {
            return (
                <div className="Incorrect">
                    <div className="Alert">Access Denied</div>
                </div>
            );
        } else {
            return (
                <div className="Screen">
                    <input
                        type="text"
                        value={input.replace(/./g, '*')}
                        readOnly
                        className="Neutral"
                    />
                </div>
            );
        }
    };

    const renderButtons = () => {
        const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

        return buttons.map((key) => (
            <button
                key={key}
                onClick={() => handleKeyClick(key)}
                className="Button"
            >
                {key}
            </button>
        ));
    };

    return (
        <div className="App">
            <div>
                {renderContent()}
                <div className="Buttons">{renderButtons()}</div>
                <div className="Bottom-btns">
                    <button
                        className="Button ButtonDelete"
                        onClick={handleDeleteClick}
                    >
                        &lt;
                    </button>
                    <button
                        className="Button Button0"
                        onClick={() => handleKeyClick('0')}
                    >
                        0
                    </button>
                    <button
                        className="Button ButtonE"
                        onClick={handleEnterClick}
                    >
                        E
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
