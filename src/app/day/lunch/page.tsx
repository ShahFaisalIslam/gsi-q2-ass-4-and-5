import { Article, ArticleContent, ArticleImage, ArticleTitle } from "@/components/article";

export default function LunchPage() {
    return(
            <Article>
                <ArticleImage src="/morning-after.jpg" alt="Morning After" />
                <ArticleTitle>Lunch</ArticleTitle>
                <ArticleContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae hic possimus excepturi quos ullam ipsam, aspernatur iste voluptate sint perferendis culpa libero exercitationem, quidem quibusdam dolor suscipit quo expedita.</ArticleContent>
            </Article>
        );
}