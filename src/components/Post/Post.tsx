interface IPost {
  author: string;
  content: string;
}

export function Post(props: IPost) {
  return (
    <div>
      <b>{props.author}</b>
      <p>{props.content}</p>
    </div>
  );
}
