import styles from "./Heading.module.css";

export function Heading(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello there!</h1>
      <button className={styles.bold}>Click me!</button>
    </div>
  );
}
