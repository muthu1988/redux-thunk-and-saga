export default function counter(state = { activities: [] }, action) {
    switch (action.type) {
        case 'GET_ACTIVITY':
            return { ...state, activities: [...state.activities, action.payload] }
        default:
            return state
    }
}