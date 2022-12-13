import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Redux thunk method for async operations
export const fetchActivity = createAsyncThunk('bored/activity', async () => {
    const response = await axios.get('https://www.boredapi.com/api/activity')
    return response.data.activity
})

const boredSlice = createSlice({
    name: 'bored',
    initialState: {
        activities: [],
        status: 'idle'
    },
    reducers: {
        resetActivities: state => {
            state.activities = [];
            state.status = 'idle';
        },
    },
    // Thunk 
    extraReducers(builder) {
        builder
            .addCase(fetchActivity.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchActivity.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.activities = state.activities.concat(action.payload)
            })
            .addCase(fetchActivity.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

export const { resetActivities } = boredSlice.actions;
export default boredSlice;

// import { createSlice } from '@reduxjs/toolkit';

// // A function that return a radom activity from a static array of activities
// const fetchActivity = () => {
//     const activities = ['Go to a local thrift shop', 'Go to a music festival with some friends', 'Bake pastries for you and your neighbor', 'Contribute code or a monetary donation to an open-source software project', 'Organize your movie collection', 'Have a photo session with some friends', 'Do something nice for someone you care about', 'Shred old documents you don\'t need anymore', 'Study a foreign language', 'Take a spontaneous road trip with some friends'];
//     return activities[Math.floor(Math.random() * 10)];
// }
// /**
//  * Creates a reducer
//  * name: "bored", inital state: "activities: []",
//  * actions: "getActivities, resetActivities"
//  */
// const boredSlice = createSlice({
//     name: 'bored',
//     initialState: {
//         activities: []
//     },
//     reducers: {
//         getActivities: state => {
//             state.activities.push(fetchActivity())
//         },
//         resetActivities: state => {
//             state.activities = [];
//         },
//     },
// });

// export const { getActivities, resetActivities } = boredSlice.actions;
// export default boredSlice;