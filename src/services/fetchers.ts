export async function getResource(url: string) {
    const res = await fetch('/api/pizzas?page=0&size=10&sort=id');
    const body = await res.json();

    if (!res.ok) {
        throw new Error(`Could not fetch url ${url}, recieved ${res.status}`)
    }

    return body;
}
