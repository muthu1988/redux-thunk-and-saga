import { configureStore } from '@reduxjs/toolkit';
import boredSlice, { fetchActivity } from './slices/boredSlice';

const store = configureStore({
    reducer: {
        bored: boredSlice.reducer
    }
});

// Subscribe to log store change
store.subscribe(() => {
    const state = store.getState();
    console.log(state)
});

// dispatch getActivities action
store.dispatch(fetchActivity());
