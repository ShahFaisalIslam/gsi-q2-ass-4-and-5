import Data from "@/data";
import { Card, CardButton, CardDescription, CardImage, CardTitle } from "@/components/card";

export default function Home() {
  return (
    <div className="min-h-screen mb-4">
      <div className="card-container">
        {
          Data["morning"].map((cardData,index) => (
          <Card key={index} >
            <CardImage src={cardData.image.src} alt={cardData.image.alt} />
            <CardTitle>{cardData.title}</CardTitle>
            <CardDescription>{cardData.description}</CardDescription>
            <CardButton link={cardData.link} />
          </Card>
        ))}
        {
          Data["day"].map((cardData,index) => (
          <Card key={index} >
            <CardImage src={cardData.image.src} alt={cardData.image.alt} />
            <CardTitle>{cardData.title}</CardTitle>
            <CardDescription>{cardData.description}</CardDescription>
            <CardButton link={cardData.link} />
          </Card>
        ))}
        {
          Data["evening"].map((cardData,index) => (
          <Card key={index} >
            <CardImage src={cardData.image.src} alt={cardData.image.alt} />
            <CardTitle>{cardData.title}</CardTitle>
            <CardDescription>{cardData.description}</CardDescription>
            <CardButton link={cardData.link} />
          </Card>
        ))}
        {
          Data["night"].map((cardData,index) => (
          <Card key={index} >
            <CardImage src={cardData.image.src} alt={cardData.image.alt} />
            <CardTitle>{cardData.title}</CardTitle>
            <CardDescription>{cardData.description}</CardDescription>
            <CardButton link={cardData.link} />
          </Card>
        ))}
      </div>
    </div>
  );
}
