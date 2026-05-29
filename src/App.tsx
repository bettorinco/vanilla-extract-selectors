import { parentRecipe, childClass } from "./styles.css";

export default function App() {
  return (
    <>
      <label className={parentRecipe()}>
        <div className={childClass}>Child regular</div>
      </label>
      <label className={parentRecipe({ type: "special" })}>
        <div className={childClass}>Child special</div>
      </label>
    </>
  );
}
