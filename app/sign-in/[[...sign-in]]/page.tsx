import { SignIn } from "@clerk/nextjs";
import styles from "../../sign-up/[[...sign-up]]/Clerk.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
}
