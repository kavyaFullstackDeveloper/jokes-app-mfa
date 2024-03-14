
export default function Login() {

    return(
        
<main className="grid place-items-center h-screen">
  <h1>Login Details</h1>
  <div className="text-center p-8 shadow-md">
    <p>username: anvesh</p>
    <p>password: anvesh123</p>
  </div>
  <div>
    <h2 className="text-center mb-4">Login</h2>
    <div className="p-8 shadow-md [&_*]:block [&_input]:px-4 [&_input]:py-2 [&_input]:border [&_input]:rounded-md [&_input]:mt-2">
      <form>
        <label>
          Username:
          <input type="text" placeholder="your username here" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="your password here" />
        </label>
        <button type="submit" className="mx-auto py-2 px-4 mt-2 rounded text-white bg-blue-500 hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 transition-colors duration-300">Submit</button>
      </form>
    </div>
  </div>

</main>

)}