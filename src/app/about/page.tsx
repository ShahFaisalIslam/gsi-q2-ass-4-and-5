import Image from "next/image";
import styles from "./page.module.css"
export default function AboutPage() {
    return (
        <div className="flex flex-col mb-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About Everyday Life Blog</h1>
            <div className={styles["about"]}>
                <div className="text-xl w-full max-w-lg slide-in-left" ><blockquote className="space-y-4" cite="https://www.openai.com/chatgpt">
                    <p>Welcome to our website, where we explore the intricacies of everyday life and the practices that enhance our well-being.</p>
                    <p>Here, we delve into topics like morning meditation, mindful meal times, and self-accountability, offering insights and tips to help you navigate the challenges and joys of daily living. Our mission is to inspire and empower you to cultivate a balanced lifestyle, fostering mindfulness and intentionality in every aspect of your routine.</p>
                    <p>Join us as we share practical strategies and thought-provoking discussions that encourage personal growth and a deeper connection to yourself and the world around you.</p>
                </blockquote></div>
                <div className="relative overflow-hidden w-[500px] h-[500px]">
                    <Image src="/image.png" alt="my world image" className="slide-in-right" fill style={{objectFit: "contain"}} />
                </div>
            </div>
        </div>
    );
}