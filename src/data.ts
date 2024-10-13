// const cardData;
interface ImageAttributes {
    src: string;
    alt: string;
}
interface CardData {
    title: string;
    description: string;
    link: string;
    image: ImageAttributes;
}

const Data: { [index: string]: CardData[] } = {
    morning: [{
        title: "The Benefits of Meditation: A Path to Inner Peace",
        description: "Meditation, an ancient practice rooted in various spiritual traditions, has gained significant popularity in modern times as a powerful tool for mental well-being and personal growth. At its core, meditation involves techniques that promote relaxation, heightened awareness, and a focused state of mind.",
        link: "/morning/meditation",
        image: {
            src: "/morning-after.jpg",
            alt: "Morning scenery ideal for meditation"
        }
    }, {
        title: "The Importance of Breakfast: A Nutritional Overview",
        description: "Breakfast, often referred to as the most important meal of the day, plays a crucial role in maintaining overall health and well-being. Consuming a balanced breakfast can set a positive tone for the day, providing essential nutrients and energy to kickstart metabolism.",
        link: "/morning/breakfast",
        image: {
            src: "/morning-breakfast.jpg",
            alt: "Breakfast"
        }
    }],
    day: [{
        title: "The Concept of Lunch Across the World: A Global Culinary Journey",
        description: "Lunch is more than just a meal; it reflects cultural practices, societal norms, and regional flavors. Across the globe, the concept of lunch varies significantly, showcasing diverse culinary traditions and eating habits. Here, we explore how lunch is perceived and enjoyed in different countries, highlighting unique dishes, customs, and the social significance of this midday meal.",
        link: "/day/lunch",
        image: {
            src: "/appetizer-buffet.jpg",
            alt: "Multiple types of lunch represented by a buffet"
        }
    }],
    evening: [{
        title: "The Social Importance of Evening Tea",
        description: "Evening tea, a cherished ritual in many cultures, extends beyond mere refreshment. It serves as a significant social practice that fosters connection, relaxation, and community bonding. In various settings, from bustling cities to serene countryside, the simple act of enjoying a cup of tea in the evening can create a sense of togetherness and enrich our social lives. This article delves into the social importance of evening tea and its role in enhancing relationships and traditions.",
        link: "/evening/evening_tea",
        image: {
            src: "/evening_tea.jpg",
            alt: "Evening Tea"
        }
    }],
    night: [{
        title: "The Most Common Dinners in the World",
        description: "Dinner, the evening meal that often serves as a focal point for family and community gatherings, varies widely across cultures and regions. While the ingredients and preparation methods differ, many common themes emerge in the types of dishes enjoyed around the world. Here, we explore some of the most common dinners that represent culinary traditions across different cultures.",
        link: "/night/dinner",
        image: {
            src: "/dinner.jpg",
            alt: "Dinner"
        }
    }, {
        title: "Self-Accountability",
        description: "Self-accountability is a crucial aspect of personal development, influencing our decisions, behaviors, and overall well-being. While many discussions about accountability focus on daytime activities—work, social interactions, and responsibilities—the significance of self-accountability during the night is equally vital. The evening hours can provide a unique opportunity for reflection, planning, and commitment to personal goals. Here, we explore the importance of self-accountability at night and how it can enhance our lives.",
        link: "/night/self_accountability",
        image: {
            src: "/diary.jpg",
            alt: "Diary"
        }
    }]
};

export default Data;