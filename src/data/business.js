export const businessInfo = {
    name: "Handy Mike",
    tagline: "Charlotte's Trusted Handyman",
    phone: "(704) 352-0284",
    phoneRaw: "7043520284",
    email: "mike@test.com",
    address: {
        street: "1313 GreyThorne Drive",
        city: "Charlotte",
        state: "NC",
        zip: "28202",
        full: "1313 GreyThorne Drive, Charlotte, NC"
    },
    hours: {
        days: "Monday - Sunday",
        time: "9:00 AM - 6:00 PM",
        note: "Available 7 days a week"
    },
    experience: "7+ Years",
    jobsCompleted: "32+",
    serviceRadius: "50 miles",
    baseCity: "Charlotte, NC",
    credentials: [
        "Background Checked",
        "Top Pro Status",
        "7+ Years Experience",
        "32+ Jobs Completed"
    ],
    about: {
        short: "7+ years of hands-on handyman experience — from furniture repairs and painting to drywall fixes, appliance hookups, and minor plumbing & electrical. Clean work. Clear prices. Friendly service. Based in Charlotte, NC.",
        long: "I've been doing hands-on repair, painting, and furniture work for over 7 years. I learned through real experience and daily practice — not from a classroom, but from real homes and real people. I've always been the \"fix-it\" guy for friends, family, and neighbors. What started as a hobby turned into a full-time thing. I enjoy making things work again and helping people out.",
        customers: "All kinds — homeowners, renters, realtors, landlords, Airbnb hosts, busy families. Anyone who needs a reliable extra set of hands around the house.",
        advice: "Look for someone who's responsive, shows up on time, and communicates clearly. A lot of folks can swing a hammer, but doing the job right and being respectful in your home makes all the difference."
    },
    pricing: {
        minimum: "2-hour minimum per visit",
        note: "Pricing depends on the job, but I always give a clear estimate up front. No hidden fees, no pressure. Just honest work for a fair rate."
    },
    process: "You tell me what needs doing — pictures help! I'll give you a quick idea of time and cost, and if it all sounds good, we pick a time and get it done. Simple as that.",
    propertyTypes: ["Residential", "Commercial"],
    social: {
        facebook: "",
        instagram: "",
        nextdoor: ""
    }
};

export function getPhoneLink() {
    return `tel:+1${businessInfo.phoneRaw}`;
}

export function getEmailLink() {
    return `mailto:${businessInfo.email}`;
}

export function getSchemaData() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://handymikeclt.com",
        "name": "Handy Mike",
        "image": "https://handymikeclt.com/images/mike-hero.webp",
        "url": "https://handymikeclt.com",
        "logo": "https://handymikeclt.com/images/logo.png",
        "description": businessInfo.about.short,
        "telephone": businessInfo.phone,
        "email": businessInfo.email,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessInfo.address.street,
            "addressLocality": businessInfo.address.city,
            "addressRegion": businessInfo.address.state,
            "postalCode": businessInfo.address.zip,
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.2271,
            "longitude": -80.8431
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "15:00"
            }
        ],
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 35.2271,
                "longitude": -80.8431
            },
            "geoRadius": "80467"  // 50 miles in meters
        },
        "sameAs": [
            "https://www.thumbtack.com/nc/charlotte/handyman/",
            "https://www.facebook.com/mikeshandyman"
        ]
    };
}
