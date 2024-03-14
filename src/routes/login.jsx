import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import {isLoggedIn, logIn} from "../lib/auth"

export default function Login() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, errorSet] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const name = usernameRef.current.value
        const password = passwordRef.current.value
        const loggedIn = logIn(name, password) 
        if(loggedIn) navigate("/") 
        else errorSet(true)
    }
    return (
        <main className="grid place-items-center h-screen">
            <h1>Login Details</h1>
            <div className="text-center p-8 shadow-md">
                <p>username: anvesh</p>
                <p>password: anvesh123</p>
            </div>
            <div>
                <h2 className="text-center mb-4">Login</h2>
                <div className="p-8 shadow-md [&_*]:block [&_input]:px-4 [&_input]:py-2 [&_input]:border [&_input]:rounded-md [&_input]:mt-2">
                <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input ref={usernameRef} type="text" name="username" placeholder="your username here" required />
                </label>
                <label>
                    Password:
                    <input ref={passwordRef} type="password" name="password" placeholder="your password here" required />
                </label>
                <button type="submit" className="mx-auto py-2 px-4 mt-2 rounded text-white bg-blue-500 hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 transition-colors duration-300">Submit</button>
            </form>
        </div>
        {error && (
            <div className="p-8 shadow-md rounded text-center bg-red-200/75 mt-4">
                Invalid Credentials
            </div>
        )}
    </div>
  </main>
    )
}