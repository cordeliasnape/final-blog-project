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
    <div className="flex flex-col text-center">
      <CommentForm postSlug={postSlug} />
      <h2>Comments</h2>
      {/* @ts-ignore */}
      {comments.map((comment) => {
        return (
          <div
            className="flex flex-col items-left justify-centre m-5 w-[70vw] p-2 border-2 text-left"
            key={comment.id}
          >
            <div className="uppercase text-xs">{comment.username} says...</div>
            <div className="my-4">{comment.content}</div>
          </div>
        );
      })}
    </div>
  );
}
