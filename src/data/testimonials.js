export const testimonials = [
    {
        id: 1,
        name: "Pam M.",
        date: "Sep 10, 2025",
        rating: 5,
        text: "Mike did it all! I rely on tradesmen to complete tasks that would usually go on a \"Honey-Do-List\" and some are better than others. Mike is great as a handyman. He caulked a tub and it looks amazing; he installed knobs and pulls on my recently painted kitchen cabinets; he fixed a couple 'sticky doors', and installed a new doorknob under less than ideal conditions. (And went above and beyond and removed some wasp nests). I could not have asked for a more diligent, professional, or thorough craftsman. And the price didn't break the bank. I will call him again, for sure.",
        services: ["caulking-maintenance", "cabinet-installation", "door-repair-installation"],
        tags: ["Kitchen", "Bathroom", "Doors", "Home"],
        duration: "2-5 hours",
        images: ["1.webp", "2.webp", "2200.webp"],
        folder: "Pam M. on Sep 10, 2025"
    },
    {
        id: 2,
        name: "Anastasia Z.",
        date: "Jul 20, 2025",
        rating: 5,
        text: "Mike was awesome! I had just moved and needed help hanging curtains on two tall windows, plus a framed picture and an embroidery piece. I also had a new couch that needed assembly. I really wanted someone who could do it all in one go — and Mike totally came through. He showed up on time, super friendly and professional. He put up the curtain rods, hung the curtains (which were way too high for me to reach), and made sure everything looked just right. The artwork — especially the framed embroidery I really love — is finally on the wall and gets so many compliments. The living room instantly feels cozier. And the couch! He put it together quickly and it looks great — you can actually see it in the photos I shared. Can't recommend Mike enough. I'll definitely be calling him again next time something needs doing around the house!",
        services: ["picture-mirror-hanging", "furniture-assembly"],
        tags: ["Curtains", "Furniture Assembly", "Picture Hanging"],
        images: ["1.webp", "2.webp", "3.webp", "4.webp"],
        folder: "Anastasia Z. on Jul 20, 2025"
    },
    {
        id: 3,
        name: "Ariana K.",
        date: "Jul 20, 2025",
        rating: 5,
        text: "Mike was great — definitely calling him again next time something breaks! He fixed the garbage disposal (turns out it was a banana peel that jammed it), and honestly, I was so relieved, living without it even for a day is no fun. He also swapped out the fridge water filter while he was here, which was super helpful. Everything was quick, smooth, and stress-free. So glad I found someone reliable!",
        services: ["appliance-installation", "plumbing-services"],
        tags: ["Garbage Disposal", "Appliances", "Kitchen"],
        images: ["2.webp", "2200.webp", "3.webp"],
        folder: "Ariana K. on Jul 20, 2025"
    },
    {
        id: 4,
        name: "Daria K.",
        date: "Jul 18, 2025",
        rating: 5,
        text: "Mike helped me hang three pictures and a mirror by the entryway, and I couldn't be happier with how it turned out. He worked quickly and confidently — you can tell he's done this a lot. Everything is perfectly straight and secure, and he made sure it all looked just right. The mirror completely changed the feel of the entryway, it looks brighter and more welcoming now. The pictures added so much to the space too. I really appreciate his skill and attention to detail. Highly recommend!",
        services: ["picture-mirror-hanging"],
        tags: ["Pictures", "Mirrors", "Entryway"],
        images: ["2.webp", "2200.webp"],
        folder: "Daria K. on Jul 18, 2025"
    },
    {
        id: 5,
        name: "Evgeniya B.",
        date: "Jul 19, 2025",
        rating: 5,
        text: "Tried to put the twin bed together myself… gave up halfway. Mike came in, got it done fast, no drama. Brought his tools, knew exactly what to do. The frame is solid, no wobbling, no guessing. Honestly, such a relief. Would call him again without thinking twice.",
        services: ["furniture-assembly"],
        tags: ["Furniture Assembly", "Bed Frame", "Bedroom"],
        images: ["2 copy.png"],
        folder: "Evgeniya B. on Jul 19, 2025"
    },
    {
        id: 6,
        name: "Inessa M.",
        date: "Sep 24, 2025",
        rating: 5,
        text: "Mike was absolutely amazing! I can't say enough about his professional services. He installed a chandelier above our stairs. It wasn't an easy task because he needed to add 2 additional lighting. He worked VERY hard on it and it came out looking so great. Thank you, Mike! Definitely will see you soon.",
        services: ["lighting-installation", "electrical-services"],
        tags: ["Chandelier", "Lighting", "Deck or Porch"],
        duration: "Less than 2 hours",
        images: ["1.webp", "2.webp"],
        folder: "Inessa M. on Sep 24, 2025"
    },
    {
        id: 7,
        name: "Chloe R.",
        date: "Nov 11, 2025",
        rating: 5,
        text: "Mike did a wonderful job with our built-in bar area! He was professional, thorough and knowledgeable. He was also very responsive with messages. Thank you, Mike!",
        services: ["cabinet-installation", "shelving-installation", "molding-baseboards", "electrical-services"],
        tags: ["Kitchen", "Cabinets", "Shelving", "Molding", "Electrical"],
        duration: "2-5 hours",
        images: ["1.webp"],
        folder: "Chloe R. on Nov 11, 2025"
    }
];

export function getTestimonialsByService(serviceSlug) {
    return testimonials.filter(t => t.services.includes(serviceSlug));
}

export function getFeaturedTestimonials(count = 3) {
    return testimonials.slice(0, count);
}

export function getAllTestimonials() {
    return testimonials;
}
