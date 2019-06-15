const initState = { count: 0 };

function counter(state = initState, action) {
    switch (action.type) {
        case 'increase':
            return Object.assign({}, state, { count: state.count + 1 });
        case 'subtract':
            return Object.assign({}, state, { count: state.count - 1 });
        default: return state;
    }
}
 
export default counter;
