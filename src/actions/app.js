export default function(isAuth, menu) {
    return {
        type: 'AUTH',
        isAuth: isAuth || false,
        menu: menu || {}
    }
}