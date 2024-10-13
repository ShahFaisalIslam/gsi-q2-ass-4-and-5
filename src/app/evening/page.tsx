import { Card, CardButton, CardDescription, CardImage, CardTitle } from "@/components/card";
import Data from "@/data";

export default function EveningPage() {
    return (
        <div className="min-h-screen mb-4">
            <div className="card-container">
                {
                    Data["evening"].map((cardData, index) => (
                        <Card key={index} >
                            <CardImage src={cardData.image.src} alt={cardData.image.alt} />
                            <CardTitle>{cardData.title}</CardTitle>
                            <CardDescription>{cardData.description}</CardDescription>
                            <CardButton link={cardData.link} />
                        </Card>
                    ))
                }
            </div>
        </div>
    );

}