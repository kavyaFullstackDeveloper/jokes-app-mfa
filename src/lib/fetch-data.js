export async function fetchData() {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming,Dark,Pun?amount=10&type=single")
    const data = await res.json()
    return data
}
