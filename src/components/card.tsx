import styles from "@/components/card.module.css"
import Image from "next/image";
import Link from "next/link";

const CardTitle  = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <h1 className={styles["card-title"]}>{children}</h1>
    )
}

const CardDescription = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
            <p className={styles["card-description"]}>{children}</p>
    )
}
interface CardButtonProps {
    link: string;
};
const CardButton = (props: CardButtonProps) => {
    return (
        <button className={styles["card-button"]}><Link href={props.link}>Read More</Link></button>
    );
}

const Card = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
        <div className={styles["card"]}>
            {children}
        </div>
    );
}

const CardContent = ({children}: Readonly<{
    children: React.ReactNode
}>) => {
    return(
        <div className="h-[6rem]">
            {children}
        </div>
    );
}

interface CardImageProps {
    src: string;
    alt: string;
}
const CardImage = (props: CardImageProps) => {
    return (
        <div className={styles["card-image"]}>
            <Image src={props.src} alt={props.alt} fill style={{objectFit:"cover"}} />
        </div>
    );
}

export {Card,CardButton,CardImage,CardContent,CardDescription,CardTitle};