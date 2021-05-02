import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        character_name: 'Placeholder Hero',
        comics_appeared_in: '0',
        description: 'Placeholder description',
        super_power: 'Placeholder power'
    },
    reducers: {
        chooseCharacter: (state, action) => { state.character_name = action.payload},
        chooseComics: (state, action) => { state.comics_appeared_in = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseCharacter, chooseComics, } = rootSlice.actions;