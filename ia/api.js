async function getCompletion(message, apiKey) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: "Respondes en español y eres una experta en programación web." },
                    { role: "user", content: message }
                ],
                max_tokens: 500
            })
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${await response.text()}`);
        }

        const data = await response.json();
        console.log("Respuesta de OpenAI:", data.choices[0].message.content);
    } catch (error) {
        console.error("Error en la petición:", error.message);
    }
}
