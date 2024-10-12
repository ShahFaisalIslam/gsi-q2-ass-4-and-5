import Link from "next/link"
import styles from "@/components/header.module.css"
import Image from "next/image";

export default function HeaderComponent () {
    return(
        <div className={styles["header"]}>
            <ul className={styles["header-items"]}>
                <li><Link href="/morning">Morning</Link></li>
                <li><Link href="/day">Day</Link></li>
                <li><Link href="/evening">Evening</Link></li>
                <li><Link href="/night">Night</Link></li>
            </ul>
            <Link href="/" className={styles["header-logo"]} ><Image src="/everyday_life_2.png" alt="Everyday Life" fill style={{objectFit : "cover"}} /></Link>
        </div>
    );
}