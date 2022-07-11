import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

export interface IContent {
  id: number;
  type: string;
  content: string;
}

export interface IPost {
  author: {
    name: string;
    avatar_url: string;
    role: string;
  };
  content: IContent[];
  published_at: Date;
}

export function Post({ author, published_at, content }: IPost) {
  const [comments, setComments] = useState([
    "Muito bom Devon, parabéns!! 👏👏",
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const published_date_formatted = format(
    published_at,
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm",
    {
      locale: ptBR,
    }
  );

  const published_date_relative_to_now = formatDistanceToNow(published_at, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault();

    if (!newCommentText) {
      return;
    }

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={published_date_formatted}
          dateTime={published_at.toISOString()}
        >
          {published_date_relative_to_now}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          switch (item.type) {
            case "paragraph":
              return <p key={item.id}>{item.content}</p>;
            case "link":
              return (
                <p key={item.id}>
                  <a href={item.content} target="_blank">
                    {item.content}
                  </a>
                </p>
              );
            default:
              return null;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário aqui..."
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentLint}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
