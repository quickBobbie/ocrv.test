export default function(state = {}, action) {
    switch (action.type) {
        case 'INPUT': {
            state.inputs[action.name].value = action.value;
            break;
        }
        case 'MESSAGE': {
            state.message = action.message;
            break;
        }
    }

    return state;
}