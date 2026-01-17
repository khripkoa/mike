// Content variations for city pages to make them unique
// Each city gets a random variation to avoid duplicate content

export const whyChooseUsVariations = [
    // Variation 1: Focus on local expertise
    [
        {
            icon: "📍",
            title: "Local Expertise",
            description: "We know {city} and provide fast, reliable service to your neighborhood."
        },
        {
            icon: "⭐",
            title: "Top-Rated Pro",
            description: "Consistently rated 5 stars by homeowners across the Charlotte area."
        },
        {
            icon: "💰",
            title: "Fair, Honest Pricing",
            description: "Clear quotes upfront. No hidden fees or surprise charges."
        },
        {
            icon: "🔧",
            title: "7+ Years Experience",
            description: "Skilled in all types of home repairs and improvements."
        }
    ],

    // Variation 2: Focus on reliability
    [
        {
            icon: "⏰",
            title: "Same-Day Service",
            description: "Fast response times for {city} homeowners who need help today."
        },
        {
            icon: "✅",
            title: "Trusted Professional",
            description: "Thumbtack Top Pro with verified reviews for your peace of mind."
        },
        {
            icon: "🏆",
            title: "Quality Guaranteed",
            description: "We stand behind our work with a satisfaction guarantee."
        },
        {
            icon: "💬",
            title: "Clear Communication",
            description: "We keep you informed every step of the way."
        }
    ],

    // Variation 3: Focus on value
    [
        {
            icon: "💵",
            title: "No Hidden Fees",
            description: "Transparent pricing means you know the cost before we start."
        },
        {
            icon: "🔨",
            title: "All Repairs, One Pro",
            description: "From doors to drywall, we handle everything {city} homeowners need."
        },
        {
            icon: "📞",
            title: "Easy Scheduling",
            description: "Book online or call us directly for flexible appointment times."
        },
        {
            icon: "⭐",
            title: "5-Star Reviews",
            description: "Join hundreds of satisfied customers in the Charlotte area."
        }
    ],

    // Variation 4: Focus on professionalism
    [
        {
            icon: "🛠️",
            title: "Professional Service",
            description: "Clean, organized work that respects your {city} home."
        },
        {
            icon: "📋",
            title: "Detailed Estimates",
            description: "Complete breakdown of work and costs before we begin."
        },
        {
            icon: "🏅",
            title: "Experienced Professional",
            description: "7+ years of professional experience with residential work."
        },
        {
            icon: "💪",
            title: "Skilled Craftsman",
            description: "7+ years of hands-on experience with quality results."
        }
    ]
];

// Helper function to get variation for a city (deterministic based on city name)
export function getWhyChooseUsForCity(cityName) {
    // Use city name to deterministically select a variation (same city always gets same variation)
    const index = cityName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % whyChooseUsVariations.length;
    const variation = whyChooseUsVariations[index];

    // Replace {city} placeholder with actual city name
    return variation.map(item => ({
        ...item,
        description: item.description.replace(/{city}/g, cityName)
    }));
}
