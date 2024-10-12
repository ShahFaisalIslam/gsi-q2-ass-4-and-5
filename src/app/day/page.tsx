import { Card, CardButton, CardDescription, CardImage, CardTitle } from "@/components/card";

export default function MorningPage() {
    return (
        <div className="min-h-screen mb-4">
            <div className="card-container">
                <Card>
                    <CardImage src="/appetizer-buffet.jpg" alt="Lunch Buffet" />
                    <CardTitle>Lunch</CardTitle>
                    <CardDescription>
                        Lunch is more than just a meal; it reflects cultural practices, societal norms, and regional flavors. Across the globe, the concept of lunch varies significantly, showcasing diverse culinary traditions and eating habits. Here, we explore how lunch is perceived and enjoyed in different countries, highlighting unique dishes, customs, and the social significance of this midday meal.
                    </CardDescription>
                    <CardButton link="/day/lunch" />
                </Card>
            </div>
        </div>
    );

}