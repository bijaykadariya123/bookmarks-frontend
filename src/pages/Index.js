import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
  const bookmarks = useLoaderData();

  return (
    <div className="indexcss">
          <div className="index-main">
          <h2>Create a bookmark</h2>
          <Form action="/create" method="post">
            <label>Input Title</label><br/>
            <input type="input" name="title" placeholder="bookmark's title" /><br/>
            <label>Input URL</label><br/>
            <input type="input" name="url" placeholder="bookmark's url" /><br/>
            <input type="submit" value="create bookmark" />
          </Form>

          <h2>Bookmarks</h2>
          {bookmarks.map((bookmark) => {
            return <div key={bookmark._id} className="bookmark">
              <Link to={`/${bookmark._id}`}>
                <h4>{bookmark.title}</h4>
              </Link>
            </div>
        })}
        </div>
    </div>
)}

export default Index;
