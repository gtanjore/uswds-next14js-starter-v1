import Image from "next/image";
import styles from "./page.module.css"; 

export default function Home() {
  return (
    <main>
      <div>
        <h3 className="site-preview-heading">Default</h3>
        <button className="usa-button" type="button">
          Default
        </button>
        <button className="usa-button usa-button--hover" type="button">
          Hover
        </button>
      </div>
    </main>
  );
}
