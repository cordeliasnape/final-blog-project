import { WEB_SITE } from "config";

export default async function Comments({ postSlug }: { postSlug: string }) {
  let comments = [];

  try {
    const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      next: { revalidate: 10 },
    });
    const response = await commentsResult.json();
    comments = response.comments.rows;
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h2>Comments</h2>
      <h3>Leave a comment</h3>

      <form action={`/api/comments/${postSlug}`} method="POST">
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" />

        <label htmlFor="comment">Your comment::</label>
        <textarea name="comment" cols={30} rows={10} />

        <button type="submit">Submit Comment</button>
      </form>
      {/* @ts-ignore */}
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.username} says...
            <br />
            {comment.content}
          </li>
        );
      })}
    </div>
  );
}
