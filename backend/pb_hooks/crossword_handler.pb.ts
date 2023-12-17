onAfterBootstrap(() => {
  if (!$os.args.includes("serve")) return true;
  const OPENAI_KEY = $os.getenv("OPENAI_KEY");
  if (!OPENAI_KEY) {
    console.log("Please set the OPENAI_KEY environment variable");
    $os.exit(1);
  }
});

const OpenAI = require(`C:/Users/Dani/Documents/git/crossword-daily/backend/pb_hooks/node_modules/openai/index`);

const openai = new OpenAI({
  apiKey: $os.getenv("OPENAI_KEY"),
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });
  console.log(chatCompletion);
}

main();
