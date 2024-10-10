import Link from "next/link"
import styles from "@/components/header.module.css"

export default function HeaderComponent () {
    return(
        <div className={styles["header"]}>
            <ul className={styles["header-items"]}>
                <li><Link href="/morning">Morning</Link></li>
                <li><Link href="/day">Day</Link></li>
                <li><Link href="/evening">Evening</Link></li>
                <li><Link href="/night">Night</Link></li>
            </ul>
            <Link href="/" >Everyday Life</Link>
        </div>
    );
}