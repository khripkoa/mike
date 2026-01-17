// Content templates for ZIP code pages based on housing type

export const introTemplates = {
    condo: (zipCode, area, city) => `Professional handyman services for residents of ZIP ${zipCode}${area ? ` in ${area}` : ''}. We specialize in apartment and condo work - from cabinet installation to drywall repair. We understand the unique needs of multi-unit buildings and work with property management companies. 7+ years of experience serving ${city}. Call (704) 111-1111 for a free quote.`,

    house: (zipCode, area, city) => `Professional handyman services in ZIP ${zipCode}${area ? `, ${area}` : ''}. We help homeowners with repairs and improvements: decks, fences, doors, floors, painting, and much more. Free estimates, fixed pricing, available 7 days a week. Serving ${city} for 7+ years. Call (704) 111-1111 today.`,

    mixed: (zipCode, area, city) => `Reliable handyman in ZIP ${zipCode}${area ? `, ${area}` : ''}. We serve both homeowners and apartment residents throughout ${city}. From small repairs to large projects - we do it right the first time. 100% satisfaction guarantee. 7+ years of experience. Call (704) 111-1111 for a free quote.`
};

export const faqSets = {
    condo: [
        {
            question: "Do you work in apartment buildings and high-rises?",
            answer: "Yes! We have extensive experience working in condos and apartments. We can coordinate with your building management for access."
        },
        {
            question: "Can you mount items on concrete walls?",
            answer: "Absolutely. We have professional equipment for working with concrete and brick walls."
        },
        {
            question: "Do you work with building management?",
            answer: "Yes, we can coordinate with your property management for access and follow building requirements."
        }
    ],
    house: [
        {
            question: "Do you do outdoor work like decks and fences?",
            answer: "Yes! We handle both interior and exterior work - decks, fences, doors, windows, siding, and more."
        },
        {
            question: "Is there a minimum charge?",
            answer: "2-hour minimum per visit. Free estimates by phone or photo."
        },
        {
            question: "Do you work on weekends?",
            answer: "Yes, we work 7 days a week including weekends."
        }
    ],
    mixed: [
        {
            question: "What are your most popular services?",
            answer: "Door repair, drywall patching, painting, cabinet installation, and minor plumbing/electrical repairs."
        },
        {
            question: "How quickly can you come out?",
            answer: "Often same-day availability. Call in the morning, we can often be there in the afternoon."
        },
        {
            question: "Do you guarantee your work?",
            answer: "Yes, 100% satisfaction guarantee. If you're not happy, we'll make it right at no extra charge."
        }
    ]
};

// Service order priority by housing type
export const serviceOrder = {
    condo: [
        "cabinet-installation",
        "drywall-repair",
        "interior-doors",
        "furniture-assembly",
        "picture-mirror-hanging",
        "appliance-installation",
        "caulking-maintenance",
        "painting-services",
        "shelving-installation",
        "plumbing-services",
        "electrical-services",
        "flooring-repair"
    ],
    house: [
        "door-repair-installation",
        "deck-fence-repair",
        "drywall-repair",
        "painting-services",
        "flooring-repair",
        "molding-baseboards",
        "plumbing-services",
        "electrical-services",
        "cabinet-installation",
        "shelving-installation",
        "caulking-maintenance",
        "picture-mirror-hanging"
    ],
    mixed: [
        "door-repair-installation",
        "drywall-repair",
        "painting-services",
        "cabinet-installation",
        "flooring-repair",
        "plumbing-services",
        "electrical-services",
        "furniture-assembly",
        "molding-baseboards",
        "shelving-installation",
        "picture-mirror-hanging",
        "appliance-installation"
    ]
};

export function getIntroText(type, zipCode, area, city) {
    const template = introTemplates[type] || introTemplates.mixed;
    return template(zipCode, area, city);
}

export function getFAQs(type) {
    return faqSets[type] || faqSets.mixed;
}

export function getOrderedServices(type, allServices) {
    const order = serviceOrder[type] || serviceOrder.mixed;

    // Sort services by the defined order
    return allServices.sort((a, b) => {
        const indexA = order.indexOf(a.slug);
        const indexB = order.indexOf(b.slug);

        // If both found, sort by order
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }
        // If only a is found, it comes first
        if (indexA !== -1) return -1;
        // If only b is found, it comes first
        if (indexB !== -1) return 1;
        // If neither found, keep original order
        return 0;
    });
}
