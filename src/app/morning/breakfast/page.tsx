import { Article, ArticleBlock, ArticleContent, ArticleImage, ArticleQuote, ArticleTitle } from "@/components/article";

export default function BreakfastPage() {
    return (
        <Article>
            <ArticleImage src="/morning-breakfast.jpg" alt="Morning Breakfast" />
            <ArticleTitle>The Importance of Breakfast: A Nutritional Overview</ArticleTitle>
            <ArticleContent>
                <ArticleQuote cite="https://drinkmainemilk.org/breakfast-can-set-the-tone-for-the-whole-day/">You wouldn’t try to drive to work without gas in the tank, right? So, why do we zip off for the day without fueling our bodies? - Andrea Paul, Registered Dietrician</ArticleQuote>
                <p>Breakfast, often referred to as the most important meal of the day, plays a crucial role in maintaining overall health and well-being. Consuming a balanced breakfast can set a positive tone for the day, providing essential nutrients and energy to kickstart metabolism.</p>
                <ArticleBlock>

                    <h2>Nutritional Benefits</h2>
                    <ul>
                        <li><strong>Energy Boost:</strong> After a night of fasting, breakfast replenishes the body’s glucose levels, providing energy for physical and mental activities.</li>
                        <li><strong>Cognitive Function:</strong> Eating breakfast can enhance cognitive functions such as memory, attention, and concentration.</li>
                        <li><strong>Weight Management:</strong> Regularly eating breakfast is associated with healthier weight management, reducing cravings later in the day.</li>
                        <li><strong>Nutritional Intake:</strong> Breakfast offers an opportunity to consume vital nutrients, including dietary fiber, vitamins, and minerals.</li>
                    </ul>

                    <h2>Common Breakfast Foods</h2>
                    <p>Breakfast options vary widely across cultures and preferences. Here are some popular choices:</p>
                    <ul>
                        <li><strong>Whole Grains:</strong> Oatmeal, whole grain bread, and cereals.</li>
                        <li><strong>Fruits and Vegetables:</strong> Fresh fruits like bananas, berries, and apples, as well as vegetables like spinach or tomatoes.</li>
                        <li><strong>Proteins:</strong> Eggs, yogurt, and nut butters.</li>
                        <li><strong>Healthy Fats:</strong> Avocados, nuts, and seeds.</li>
                    </ul>

                    <h2>Quick and Easy Breakfast Ideas</h2>
                    <p>For those with busy mornings, quick and nutritious breakfast options can include:</p>
                    <ul>
                        <li>Overnight oats with fruits and nuts</li>
                        <li>Smoothies packed with greens and protein</li>
                        <li>Greek yogurt topped with granola and berries</li>
                        <li>Whole grain toast with avocado and poached eggs</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Incorporating a balanced breakfast into your daily routine can have significant health benefits. By prioritizing this meal, you not only nourish your body but also set the stage for a productive day. Whether you prefer a hearty meal or a quick snack, making time for breakfast is a simple yet effective step towards a healthier lifestyle.</p>
                </ArticleBlock>
            </ArticleContent>
        </Article>
    );
}