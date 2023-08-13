
import baseUrl from "./base_url";

export const bookmarkLoader = async ()=>{
    const response = await fetch(`${baseUrl}`)
    const allBookmark= await response.json()
    return allBookmark
}

export const onebookmarkLoader = async({params})=>{
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/${id}`)
    // convert the response into a js Object
    const oneBookmarkLoader = await response.json()
    // return the person
    return oneBookmarkLoader
}