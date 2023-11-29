import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

export default async function Comments({ postSlug }: { postSlug: string }) {
  //from our blog/slug - then gets parsed to comment form

  let comments = [];

  try {
    const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      next: { revalidate: 5 },
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

      {/* can be deleted */}
      {/* <form
        className="flex flex-col justify-center items-center"
        action={`/api/comments/${postSlug}`}
        method="POST"
      >
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" />

        <label htmlFor="comment">Your comment::</label>
        <textarea name="comment" cols={30} rows={10} />

        <button type="submit">Submit Comment</button>
      </form> */}
      <CommentForm postSlug={postSlug} />
      {/* @ts-ignore */}
      {comments.map((comment) => {
        return (
          <li
            className="flex flex-col items-center justify-center m-auto w-[70vw] p-2 border-2 "
            key={comment.id}
          >
            {comment.username} says...
            <br />
            {comment.content}
          </li>
        );
      })}
    </div>
  );
}
