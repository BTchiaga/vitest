export async function getPostBody(id:number) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) =>response.json() )
    return data.body
}

//the native fetch function is only available as from node 18