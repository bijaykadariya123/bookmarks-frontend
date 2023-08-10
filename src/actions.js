/// AUBREY'S CODE ///

// backend render url
import baseUrl from "./base_url";
// use this function to redirect to other routes in our code
import { redirect } from "react-router-dom"


// CREATE ACTION //
export const createAction = async ({request}) => {
    // get the form data requested
    const formData = await request.formData();
    // create object for new bookmark
    const newBookmark = {title: formData.get('title'), url: formData.get('url')};
    // send newBookmark to the backend 
    await fetch(`${baseUrl}`, {
        // make post request
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        // send newBookmark string as JSON
        body: JSON.stringify(newBookmark)
    });
    return redirect("/")
}

// UPDATE ACTION //
export const updateAction = async ({request, params}) => {
    // create id variable
    const id = params.id;
    // get the form data request
    const formData = await request.formData();
    // create object for the updated bookmark
    const updatedBookmark = {title: formData.get('title'), url: formData.get('url')};
    // send the update to the backend url 
    await fetch(`${baseUrl}/${id}`, {
        // create a put request
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        // send updatedBookmark object string as json
        body: JSON.stringify(updatedBookmark)
    });
    return redirect(`/${id}`)
}

// DELETE ACTION //
export const deleteAction = async ({params}) => {
    // id variable
    const id = params.id;
    // send delete request to back end
    await fetch(`${baseUrl}/${id}`, {
        // tell fetch to make a delete request
        method: "DELETE"
    })
    return redirect('/')
}