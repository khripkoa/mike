/**
 * Dynamic Urgency Calculator
 * Returns available slots based on day of week and time of day
 * Creates realistic scarcity that helps conversion
 */

export function getAvailableSlots() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours(); // 0-23

    // Base slots by day of week
    let baseSlots;
    if (day === 0) { // Sunday
        baseSlots = 1;
    } else if (day === 6) { // Saturday
        baseSlots = 2;
    } else if (day === 5) { // Friday
        baseSlots = 3;
    } else { // Monday-Thursday
        baseSlots = 5;
    }

    // Reduce slots as day progresses
    let timeMultiplier = 1;
    if (hour >= 8 && hour < 12) {
        timeMultiplier = 1.0; // Morning: full slots
    } else if (hour >= 12 && hour < 17) {
        timeMultiplier = 0.66; // Afternoon: 2/3 slots
    } else if (hour >= 17 && hour < 20) {
        timeMultiplier = 0.33; // Evening: 1/3 slots
    } else {
        timeMultiplier = 0; // Night: show "tomorrow" message
    }

    const availableSlots = Math.max(1, Math.floor(baseSlots * timeMultiplier));

    // Generate message
    let message;
    let urgencyLevel; // 'low', 'medium', 'high'

    if (hour >= 20 || hour < 8) {
        message = "Book tomorrow's slots now!";
        urgencyLevel = 'medium';
    } else if (availableSlots === 1) {
        message = `Only ${availableSlots} slot left this week - Book now!`;
        urgencyLevel = 'high';
    } else if (availableSlots <= 2) {
        message = `Only ${availableSlots} slots left this week`;
        urgencyLevel = 'high';
    } else {
        message = `${availableSlots} slots available this week`;
        urgencyLevel = 'medium';
    }

    return {
        slots: availableSlots,
        message,
        urgencyLevel,
        dayOfWeek: getDayName(day),
        timeOfDay: getTimeOfDayName(hour)
    };
}

function getDayName(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}

function getTimeOfDayName(hour) {
    if (hour >= 8 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    if (hour >= 17 && hour < 20) return 'evening';
    return 'night';
}

/**
 * Formula Documentation:
 * 
 * Base Slots:
 * - Monday-Thursday: 5 slots
 * - Friday: 3 slots
 * - Saturday: 2 slots
 * - Sunday: 1 slot
 * 
 * Time Multiplier:
 * - 8:00-12:00 (Morning): 1.0x (full availability)
 * - 12:00-17:00 (Afternoon): 0.66x (2/3 of slots)
 * - 17:00-20:00 (Evening): 0.33x (1/3 of slots)
 * - 20:00-8:00 (Night): Special "book tomorrow" message
 * 
 * Final Formula: availableSlots = floor(baseSlots × timeMultiplier)
 * Minimum: Always at least 1 slot shown (except night hours)
 * 
 * Examples:
 * - Monday 10am: 5 × 1.0 = 5 slots
 * - Monday 3pm: 5 × 0.66 = 3 slots
 * - Friday 6pm: 3 × 0.33 = 1 slot
 * - Sunday 2pm: 1 × 0.66 = 1 slot (minimum)
 */
