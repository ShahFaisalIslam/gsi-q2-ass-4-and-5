import { Card, CardButton, CardContent, CardDescription, CardImage, CardTitle } from "@/components/card";
import Data from "@/data";

export default function MorningPage() {
    return (
        <div className="min-h-screen mb-4">
            <div className="card-container">
                {
                    Data["morning"].map((cardData, index) => (
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