const apiKey = "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"; // 🔴 Reemplaza con tu API Key real

async function getCompletion(message) {
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
