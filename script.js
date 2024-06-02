const questions = ["What food have you never eaten but would really like to try?", "What’s something you really resent paying for?", "What would a world populated by clones of you be like?", "What are you currently worried about?", "Where are some unusual places you’ve been?", "Where do you get your news?", "What are some red flags to watch out for in daily life?", "What movie can you watch over and over without ever getting tired of?", "When you are old, what do you think children will ask you to tell stories about?", "When did something start out badly for you but in the end, it was great?", "How would your country change if everyone, regardless of age, could vote?", "What animal would be cutest if scaled down to the size of a cat?", "If your job gave you a surprise three day paid break to rest and recuperate, what would you do with those three days?", "What’s wrong but sounds right?", "If you couldn’t be convicted of any one type of crime, what criminal charge would you like to be immune to?", "What’s something that will always be in fashion, no matter how much time passes?", "What actors or actresses play the same character in almost every movie or show they do?", "In the past people were buried with the items they would need in the afterlife, what would you want buried with you so you could use it in the afterlife?", "What “old person” things do you do?", "Which celebrity do you think is the most down to earth?", "What’s the spiciest thing you’ve ever eaten?", "What’s the most expensive thing you’ve broken?", "What obstacles would be included in the World’s most amazing obstacle course?", "What makes you roll your eyes every time you hear it?", "What do you think you are much better at than you actually are?", "Should kidneys be able to be bought and sold?", "What’s your cure for hiccups?", "What invention doesn’t get a lot of love, but has greatly improved the world?", "What’s the most interesting building you’ve ever seen or been in?", "What mythical creature do you wish actually existed?", "What are your most important rules when going on a date?", "How do you judge a person?", "If someone narrated your life, who would you want to be the narrator?", "What was the most unsettling film you’ve seen?", "Which celebrity or band has the worst fan base?", "What are you interested in that most people aren’t?", "What’s something people don’t worry about but really should?", "What movie quotes do you use on a regular basis?", "Do you think that children born today will have better or worse lives than their parents?", "What’s the funniest joke you know by heart?", "When was the last time you felt you had a new lease on life?", "What’s the funniest actual name you’ve heard of someone having?", "Which charity or charitable cause is most deserving of money?", "What TV show character would it be the most fun to change places with for a week?", "What was cool when you were young but isn’t cool now?", "If you were moving to another country, but could only pack one carry-on sized bag, what would you pack?"];
let currentQuestionIndex = 0;
let answers = [];
const MAX_QUESTIONS = 5;

// Function to load the first question when the page loads
document.addEventListener("DOMContentLoaded", () => {
    shuffleArray(questions); // Shuffle the questions array
    displayQuestion(); // Display the first question
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    document.getElementById("question").textContent = `Q.${currentQuestionIndex + 1} ${questions[currentQuestionIndex]}`;
}

function nextQuestion() {
    if (currentQuestionIndex >= MAX_QUESTIONS) {
        generatePNG(); // If already answered 5 questions, generate PNG
        return;
    }

    const answerInput = document.getElementById("answer");
    const answer = answerInput.value;
    if (answer) {
        answers.push(answer);
        answerInput.value = '';

        if (currentQuestionIndex < questions.length - 1 && currentQuestionIndex < MAX_QUESTIONS - 1) {
            currentQuestionIndex++;
            displayQuestion(); // Display the next question if not reached max questions
        } else {
            generatePNG();
        }
    } else {
        alert("Please provide an answer!");
    }
}

function generatePNG() {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#8fbc8f";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff8c00";
    ctx.font = "30px Arial";
    ctx.fillText("StoryQuiz Answers", 50, 50);

    ctx.fillStyle = "#000000";
    ctx.font = "20px Arial";
    for (let i = 0; i < answers.length; i++) {
        ctx.fillText(`Q${i + 1}: ${questions[i]}`, 50, 100 + i * 50);
        ctx.fillText(`A${i + 1}: ${answers[i]}`, 50, 130 + i * 50);
    }

    const link = document.createElement("a");
    link.download = 'storyquiz.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
}

