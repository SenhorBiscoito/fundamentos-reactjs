import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

interface IPost {
  author: string;
  content: string;
}

export function Post(props: IPost) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/SenhorBiscoito.png" />
          <div className={styles.authorInfo}>
            <strong>SenhorBiscoito</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="30 de Junho de 2022 às 22:00"
          dateTime="2022-06-04T22:00:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário aqui..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentLint}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
