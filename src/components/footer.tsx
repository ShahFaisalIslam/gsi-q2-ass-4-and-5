import Image from "next/image";
import styles from "@/components/footer.module.css"
import headerStyles from "@/components/header.module.css"
export default function FooterComponent() {
    return (
        <div className={styles["footer"]}>
            <div className="text-center">
                © Copyright 2024. No Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
                <span>Follow:</span>
                <ul className={headerStyles["header-items"]}>
                    <li><Image src="/Facebook_Logo_Secondary.png" alt="Facebook" width={32} height={32} /></li>
                    <li><Image src="/Instagram_Glyph_Black.png" alt="Instagram" width={32} height={32} /></li>
                    <li><Image src="/twitter-logo-white.png" alt="Twitter" width={32} height={32} /></li>
                    <li><Image src="/youtube_social_square_dark.png" alt="YouTube" width={32} height={32} /></li>
                </ul>
            </div>
            <ul className={headerStyles["header-items"]}>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}