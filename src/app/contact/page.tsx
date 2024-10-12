"use client";

import { FormEvent } from "react";
import styles from "./page.module.css"


export default function ContactPage() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nameElement: HTMLInputElement = e.currentTarget.elements[0] as HTMLInputElement;

        alert(`Thank you for contacting us, ${nameElement.value}!`);
    }
    return (
        <div className="flex flex-col mb-auto p-4 w-full">
                <h1 className="text-4xl font-bold mb-4">Contact</h1>
                <form className={styles["contact-form"]} onSubmit={handleSubmit}>
                    <input name="name" required type="text" placeholder="Name" /><br />
                    <input name="email" required type="email" placeholder="Email" /><br />
                    <textarea name="message" required rows={5} cols={50} maxLength={250} placeholder="Message..." /><br />
                    <input type="submit" className={styles["submit"]} value="Submit" />
                </form>
        </div>
    );
}