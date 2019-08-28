export default function (isAuth) {
    return [
        {
            title: "Main",
            href: "/"
        },
        {
            title: "News",
            href: "/news"
        },
        {
            title: isAuth ? "Profile" : "Login",
            href: isAuth ? "/profile" : "/login"
        }
    ]
}