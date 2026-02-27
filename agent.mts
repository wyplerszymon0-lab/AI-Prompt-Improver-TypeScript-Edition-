import OpenAI from 'openai';

export class PromptAgent {
    private client: OpenAI;
    private systemPrompt: string;

    constructor(apiKey: string) {
        this.client = new OpenAI({ apiKey });
        this.systemPrompt = `
            Act as a Senior Prompt Engineer.
            Your goal is to transform the user's raw input into a high-quality, structured prompt.
            Format the output with: Role, Context, Task, and Constraints.
        `;
    }

    async improve(userInput: string): Promise<string | null> {
        try {
            const response = await this.client.chat.completions.create({
                model: "gpt-4o"
                messages: [
                    { role: "system", content: this.systemPrompt },
                    { role: "user", content: userInput }
                ],
            });
            return response.choices[0].message.content;
        } catch (error: any) {
            return `Error: ${error.message}`;
        }
    }
}
