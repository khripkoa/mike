exports.handler = async (event) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const data = JSON.parse(event.body);
        const { name, phone, email, service, message, source } = data;

        // Telegram Bot configuration
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('Missing Telegram credentials');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Server configuration error' })
            };
        }

        // Format message for Telegram
        const telegramMessage = `
🔔 *New Lead from Mike's Handyman Site*

👤 *Name:* ${name || 'N/A'}
📞 *Phone:* ${phone || 'N/A'}
📧 *Email:* ${email || 'N/A'}
🔧 *Service:* ${service || 'General Inquiry'}
📝 *Message:* ${message || 'N/A'}
🌐 *Source:* ${source || 'Contact Form'}
📅 *Time:* ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
    `.trim();

        // Send to Telegram
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
                parse_mode: 'Markdown'
            })
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('Telegram API error:', result);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Failed to send notification' })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Message sent successfully'
            })
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
