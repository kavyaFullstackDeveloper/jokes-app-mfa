import Cookies from "js-cookies";

const AUTH_SESSION_NAME = "user_session"

function logIn(username, password) {
    if(username === "anvesh" && password === "anvesh123") {
        Cookies.setItem(AUTH_SESSION_NAME, JSON.stringify({sessionId: crypto.randomUUID()}), { expires: 3 })
        return true
    }
    return false
}

function logOut() {
    Cookies.removeItem(AUTH_SESSION_NAME)
}

function isLoggedIn() {
    const cookieValue = Cookies.getItem(AUTH_SESSION_NAME);
    return cookieValue && !!JSON.parse(cookieValue);
}

export {logIn, logOut, isLoggedIn}