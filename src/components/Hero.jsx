import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/harshkedia17")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Introducing the AI Summarizer powered by OpenAI GPT-4, the pinnacle of
        text summarization technology. This cutting-edge solution leverages
        GPT-4&apos;s  advanced language comprehension to effortlessly condense large
        volumes of text into concise and coherent summaries with unparalleled
        accuracy. 
      </h2>
    </header>
  );
};

export default Hero;
