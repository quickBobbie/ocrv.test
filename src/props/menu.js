export default function (isAuth) {
    return [
        {
            title: "Главная",
            href: "/"
        },
        {
            title: "Новости",
            href: "/news"
        },
        {
            title: isAuth ? "Профиль" : "Войти",
            href: isAuth ? "/profile" : "/login"
        }
    ]
}