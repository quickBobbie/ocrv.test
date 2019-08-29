export default function(state = {}, action) {
    switch (action.type) {
        case 'INPUT': {
            state.inputs[action.name].value = action.value;
            return state;
        }
        case 'MESSAGE': {
            state.message = action.message;
            return state;
        }
        default: return state;
    }
}