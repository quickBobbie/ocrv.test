export default function(state = {}, action) {
    if (action.type && action.type === 'AUTH') {
        state.isAuth = action.isAuth;
        state.menu = action.menu;
        localStorage.setItem('isAuth', action.value);
    }

    return state;
}