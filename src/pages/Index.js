import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
  const bookmarks = useLoaderData();

  return (
    <div className="indexcss">
          <div className="index-main">
          <h2 className="createBookmark">Create a bookmark</h2>
          <Form action="/create" method="post">
            <label className="labels">Input Title</label><br/>
            <input class="form-control" type="input" name="title" placeholder="bookmark's title" /><br/>
            <label className="labels">Input URL</label><br/>
            <input class="form-control" type="input" name="url" placeholder="bookmark's url" /><br/>
            <input class="btn btn-success" type="submit" value="create bookmark" />
          </Form>
          <br/>
          <br/>

          <h2 className="bookmarkList">Bookmarks</h2>
          {bookmarks.map((bookmark) => {
            return <div key={bookmark._id} className="bookmark">
              <Link to={`/${bookmark._id}`}>
                <p className="bookmarktitle">{bookmark.title}</p>
              </Link>
            </div>
        })}
        </div>
    </div>
)}

export default Index;
