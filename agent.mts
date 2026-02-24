import { QuizAgent } from './quizAgent';

// Replace with your actual OpenAI API Key
const API_KEY = 'YOUR_OPENAI_API_KEY_HERE';
const agent = new QuizAgent(API_KEY);

async function runGenerator() {
    const topic = "Modern Web Development";
    const questionCount = 3;

    console.log(`\n🚀 Generating a ${topic} quiz... Please wait.`);

    const quiz = await agent.generateQuiz(topic, questionCount);

    if (quiz) {
        console.log(`\n=== QUIZ: ${quiz.title} ===`);
        console.log(`Topic: ${quiz.topic}\n`);

        quiz.questions.forEach((q, index) => {
            console.log(`${index + 1}. ${q.question}`);
            q.options.forEach((opt, i) => {
                const label = String.fromCharCode(65 + i); // A, B, C, D
                console.log(`   ${label}) ${opt}`);
            });
            console.log(`   ✅ Correct Answer: ${q.correctAnswer}`);
            console.log(`   💡 Explanation: ${q.explanation}\n`);
        });
        
        console.log("--- End of Quiz ---");
    } else {
        console.log("❌ Failed to generate quiz. Check your API key or connection.");
    }
}

runGenerator();
