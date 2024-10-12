import { Card, CardButton, CardDescription, CardImage, CardTitle } from "@/components/card";

export default function Home() {
  return (
    <div className="min-h-screen mb-4">
      <div className="card-container">
        <Card>
          <CardImage src="/morning-after.jpg" alt="morning after" />
          <CardTitle>The Benefits of Meditation: A Path to Inner Peace</CardTitle>
          <CardDescription>Meditation, an ancient practice rooted in various spiritual traditions, has gained significant popularity in modern times as a powerful tool for mental well-being and personal growth. At its core, meditation involves techniques that promote relaxation, heightened awareness, and a focused state of mind.</CardDescription>
          <CardButton link="/morning/meditation" />
        </Card>

        <Card>
          <CardImage src="/morning-breakfast.jpg" alt="Morning breakfast" />
          <CardTitle>The Importance of Breakfast: A Nutritional Overview</CardTitle>
          <CardDescription>
            Breakfast, often referred to as the most important meal of the day, plays a crucial role in maintaining overall health and well-being. Consuming a balanced breakfast can set a positive tone for the day, providing essential nutrients and energy to kickstart metabolism.
          </CardDescription>
          <CardButton link="/morning/breakfast" />
        </Card>

        <Card>
          <CardImage src="/appetizer-buffet.jpg" alt="Lunch Buffet" />
          <CardTitle>Lunch</CardTitle>
          <CardDescription>Lunch is more than just a meal; it reflects cultural practices, societal norms, and regional flavors. Across the globe, the concept of lunch varies significantly, showcasing diverse culinary traditions and eating habits. Here, we explore how lunch is perceived and enjoyed in different countries, highlighting unique dishes, customs, and the social significance of this midday meal.</CardDescription>
          <CardButton link="/day/lunch" />
        </Card>

        <Card>
          <CardImage src="/evening_tea.jpg" alt="Evening Tea" />
          <CardTitle>The Social Importance of Evening Tea</CardTitle>
          <CardDescription>Evening tea, a cherished ritual in many cultures, extends beyond mere refreshment. It serves as a significant social practice that fosters connection, relaxation, and community bonding. In various settings, from bustling cities to serene countryside, the simple act of enjoying a cup of tea in the evening can create a sense of togetherness and enrich our social lives. This article delves into the social importance of evening tea and its role in enhancing relationships and traditions.</CardDescription>
          <CardButton link="/evening/evening_tea" />
        </Card>

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
