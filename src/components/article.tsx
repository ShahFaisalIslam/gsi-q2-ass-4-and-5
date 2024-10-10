import "@/components/article.module.css"
import Image from "next/image";
import { CSSProperties } from "react";

const Article = ({children} : Readonly<{children: React.ReactNode;}>) => {
    return(
        <div className="flex flex-col my-4 mx-2 space-y-2 min-h-screen">
            {children}
        </div>
    );
}
interface ArticleImageProps {
    src: string;
    alt: string;
    // width: number;
    // height: number;
};
const ArticleImage = (props:ArticleImageProps) => {
    const imageStyle : CSSProperties = {
        objectFit : "cover"
    }
    return (
        <div className="w-full max-w-[1920px] h-[500px] max-h-[500px] overflow-hidden relative">
            <Image
                src={props.src}
                alt={props.alt}
                style={imageStyle}
                // height={500}
                // width={props.width}
                fill                
            />
        </div>
    );
}

const ArticleTitle = ({children} : Readonly<{children: React.ReactNode;}>) => {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">{children}</h1>
        </>
    );
}

const ArticleContent = ({children} : Readonly<{children: React.ReactNode;}>) => {
    return (
        <div className="text-lg">{children}</div>
    );
}

export {Article,ArticleImage,ArticleTitle,ArticleContent};