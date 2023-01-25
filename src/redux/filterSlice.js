// import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = '';

// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: filterInitialState,
//     reducers: {
//         setFilterValue(state, action) {
//             return action.payload;
//         },
//     },
// });

// // Генераторы экшенов
// export const { setFilterValue } = filterSlice.actions;
// // Редюсер слайса
// export const filterReducer = filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    filter: '',
};
const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilterValue(state, action) {
            state.filter = action.payload;
        },
    },
});
export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
