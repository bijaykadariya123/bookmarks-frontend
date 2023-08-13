import { useLoaderData, Form, Link } from "react-router-dom";
import '../aubreystyles.scss'


function Show(props) {
  const bookmark = useLoaderData();

  return ( <div className="showPage">
    <div className="bookmark">
      <Link to={`${bookmark.url}`}>
        <h1>{bookmark.title}</h1>
      </Link>

      <h3>Update {bookmark.title}:</h3>
      <Form action={`/update/${bookmark._id}`} method="post">
        <input
          type="input"
          name="title"
          placeholder="bookmark's title"
          defaultValue={bookmark.title}
        />

        <input
          type="input"
          name="url"
          placeholder="bookmark's URL"
          defaultValue={bookmark.url}
        />
        <input type="submit" value={`Update ${bookmark.title}`} />
      </Form>
      <h3>Delete Bookmark:</h3>
      <Form action={`/delete/${bookmark._id}`} method="post">
        <input type="submit" value={`Delete ${bookmark.title}`} />
      </Form>
    </div>
  </div>
  );
}

export default Show;
