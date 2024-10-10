import Link from "next/link"
import styles from "@/components/header.module.css"

export default function HeaderComponent () {
    return(
        <div className={styles["header"]}>
            <ul className={styles["header-items"]}>
                <li>Morning</li>
                <li>Day</li>
                <li>Evening</li>
                <li>Night</li>
            </ul>
            <Link href="/" >Everyday Life</Link>
        </div>
    );
}