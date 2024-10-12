import Image from "next/image";
import styles from "./page.module.css"
export default function AboutPage () {
    return (
        <div className="flex flex-col mb-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About Everyday Life Blog</h1>
            <div className={styles["about"]}>
                <p className="text-xl w-full max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut, quidem perspiciatis sunt quibusdam modi odio voluptatem debitis enim rerum necessitatibus! Fugiat perferendis voluptatibus doloremque cupiditate placeat labore suscipit eos!</p>
                <Image src="/image.png" alt="my world image" width={500} height={500} />
            </div>
        </div>
        );
}