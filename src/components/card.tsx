import styles from "@/components/card.module.css"
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
            <div className={styles["card-image"]}></div>
            {children}
            {/*<h1 className="card-title">{props.title}</h1>
            <p className="card-description">{props.description}</p> */}
            {/* <button className="card-button">Read More</button> */}
        </div>
    );
}

export {Card,CardButton,CardDescription,CardTitle};