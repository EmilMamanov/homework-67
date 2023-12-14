import { createSlice } from '@reduxjs/toolkit';

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
    reducers: {},
});

export default keyboardSlice.reducer;