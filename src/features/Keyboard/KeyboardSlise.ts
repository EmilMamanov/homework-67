import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface KeyboardState {
    password: string;
    input: string;
    isCorrect: boolean | null;
}

const initialState: KeyboardState = {
    password: '1337',
    input: '',
    isCorrect: null,
};

const keyboardSlice = createSlice({
    name: 'keyboard',
    initialState,
    reducers: {
        pressKey: (state, action: PayloadAction<string>) => {
            if (state.input.length < 4) {
                state.input += action.payload;
            }
        },
        deleteLastKey: (state) => {
            state.input = state.input.slice(0, -1);
        },
        checkPassword: (state) => {
            state.isCorrect = state.input === state.password;
        },
    },
});

export const { pressKey, deleteLastKey, checkPassword } = keyboardSlice.actions;

export default keyboardSlice.reducer;