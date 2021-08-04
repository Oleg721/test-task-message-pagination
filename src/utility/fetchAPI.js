
const fetchAPI = (url)=> async (data)=> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    const result = await response.json();
     if (typeof result === "object" && 'errors' in result) {
        throw new Error(JSON.stringify(result.errors))
    }
     return result;
}

export default fetchAPI