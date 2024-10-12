import { Card, CardButton, CardDescription, CardImage, CardTitle } from "@/components/card";

export default function MorningPage() {
    return (
        <div className="min-h-screen mb-4">
            <div className="card-container">
                <Card>
                    <CardImage src="/dinner.jpg" alt="Dinner" />
                    <CardTitle>The Most Common Dinners in the World</CardTitle>
                    <CardDescription>Dinner, the evening meal that often serves as a focal point for family and community gatherings, varies widely across cultures and regions. While the ingredients and preparation methods differ, many common themes emerge in the types of dishes enjoyed around the world. Here, we explore some of the most common dinners that represent culinary traditions across different cultures.</CardDescription>
                    <CardButton link="/night/dinner" />
                </Card>

                <Card>
                    <CardImage src="/diary.jpg" alt="Diary" />
                    <CardTitle>Self-Accountability</CardTitle>
                    <CardDescription>Self-accountability is a crucial aspect of personal development, influencing our decisions, behaviors, and overall well-being. While many discussions about accountability focus on daytime activities—work, social interactions, and responsibilities—the significance of self-accountability during the night is equally vital. The evening hours can provide a unique opportunity for reflection, planning, and commitment to personal goals. Here, we explore the importance of self-accountability at night and how it can enhance our lives.</CardDescription>
                    <CardButton link="/night/self_accountability" />
                </Card>
            </div>
        </div>
    );

}