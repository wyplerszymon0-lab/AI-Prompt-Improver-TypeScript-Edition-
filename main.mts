import { PromptAgent } from './agent.mjs';
import * as readline from 'readline';

const API_KEY = 'Open_AI_key';

const agent = new PromptAgent(API_KEY);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n--- AI Prompt Improver (TS Mode) ---");
console.log("Wpisz 'exit', aby wyjść.\n");

const askQuestion = () => {
    rl.question('Twój surowy prompt: ', async (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        console.log("Thinking...");
        const result = await agent.improve(input);

        console.log("\n--- ULEPSZONY PROMPT ---");
        console.log(result);
        console.log("------------------------\n");

        askQuestion(); // Zapętlone pytanie
    });
};

askQuestion();
