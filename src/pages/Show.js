import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const bookmark = useLoaderData();

  return (
    <div className="bookmark">
      <h1>{bookmark.name}</h1>
      <h2>{bookmark.title}</h2>
      <img src={bookmark.image} alt={bookmark.name} />

      <h2>Update {bookmark.name}</h2>
      <Form action={`/update/${bookmark._id}`} method="post">
        <input
          type="input"
          name="name"
          placeholder="bookmark's name"
          defaultValue={bookmark.name}
        />
        <input
          type="input"
          name="image"
          placeholder="bookmark's picture"
          defaultValue={bookmark.image}
        />
        <input
          type="input"
          name="title"
          placeholder="bookmark's title"
          defaultValue={bookmark.title}
        />
        <input type="submit" value={`update ${bookmark.name}`} />
      </Form>
      <h2>Delete Person</h2>
      <Form action={`/delete/${bookmark._id}`} method="post">
        <input type="submit" value={`delete ${bookmark.name}`} />
      </Form>
    </div>
  );
}

export default Show;
