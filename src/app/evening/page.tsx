import { Card, CardButton, CardDescription, CardImage, CardTitle } from "@/components/card";

export default function MorningPage() {
    return (
        <div className="min-h-screen mb-4">
            <div className="card-container">
                <Card>
                    <CardImage src="/evening_tea.jpg" alt="Evening Tea" />
                    <CardTitle>The Social Importance of Evening Tea</CardTitle>
                    <CardDescription>Evening tea, a cherished ritual in many cultures, extends beyond mere refreshment. It serves as a significant social practice that fosters connection, relaxation, and community bonding. In various settings, from bustling cities to serene countryside, the simple act of enjoying a cup of tea in the evening can create a sense of togetherness and enrich our social lives. This article delves into the social importance of evening tea and its role in enhancing relationships and traditions.</CardDescription>
                    <CardButton link="/evening/evening_tea" />
                </Card>
            </div>
        </div>
    );

}