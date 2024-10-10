import styles from "@/components/card.module.css"

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

const CardButton = () => {
    return (
        <button className={styles["card-button"]}>Read More</button>
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