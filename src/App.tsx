import { parentRecipe, childClass } from "./styles.css";

export default function App() {
  return (
    <>
      <div className={parentRecipe()}>
        <div className={childClass}>Child regular</div>
      </div>
      <div className={parentRecipe({ type: "special" })}>
        <div className={childClass}>Child special</div>
      </div>
    </>
  );
}
