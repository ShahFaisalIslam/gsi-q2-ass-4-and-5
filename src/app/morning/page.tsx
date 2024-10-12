import { Card, CardButton, CardContent, CardDescription, CardImage, CardTitle } from "@/components/card";

export default function MorningPage() {
    return (
        <div className="min-h-screen mb-4">
            <div className="card-container">
                <Card>
                    <CardImage src="/morning-after.jpg" alt="morning after" />
                    <CardContent>
                        <CardTitle>The Benefits of Meditation: A Path to Inner Peace</CardTitle>
                        <CardDescription>
                            Meditation, an ancient practice rooted in various spiritual traditions, has gained significant popularity in modern times as a powerful tool for mental well-being and personal growth. At its core, meditation involves techniques that promote relaxation, heightened awareness, and a focused state of mind.
                        </CardDescription>
                        <CardButton link="/morning/meditation" />
                    </CardContent>
                </Card>

                <Card>
                    <CardImage src="/morning-breakfast.jpg" alt="Morning breakfast" />
                    <CardContent>
                        <CardTitle>The Importance of Breakfast: A Nutritional Overview</CardTitle>
                        <CardDescription>Breakfast, often referred to as the most important meal of the day, plays a crucial role in maintaining overall health and well-being. Consuming a balanced breakfast can set a positive tone for the day, providing essential nutrients and energy to kickstart metabolism.</CardDescription>
                        <CardButton link="/morning/breakfast" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );

}