import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
  const bookmarks = useLoaderData();

  return (
    <div>
      <h2>Create a bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="title" placeholder="bookmark's title" />
        <input type="input" name="url" placeholder="bookmark's url" />
        <input type="submit" value="create bookmark" />
      </Form>

      <h2>Bookmarks</h2>
      {bookmarks.map((bookmark) => {
        return <div key={bookmark._id} className="bookmark">
          <Link to={`/${bookmark._id}`}>
            <h3>{bookmark.title}</h3>
          </Link>
        </div>
    })}
    </div>
)}

export default Index;
