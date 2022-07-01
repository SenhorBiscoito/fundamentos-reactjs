import styles from "./Avatar.module.css";

interface IAvatar {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, src }: IAvatar) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
