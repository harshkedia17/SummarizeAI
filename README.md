# SummarizeAI
## Overview

The React Article Summary App is a web application built with React that allows users to enter a link to an article and receive a summary generated using the GPT (Generative Pre-trained Transformer) model. The app leverages the power of natural language processing to provide concise summaries of articles, making it easier for users to quickly grasp the main points without having to read the entire article.



## Setup

To set up and run the React Article Summary App on your local machine, follow the steps below:

 1. **Clone the repository**: Start by cloning this repository to your local machine using the following command:
```
	git clone https://github.com/harshkedia17/SummarizeAI.git
```
 2. **Install dependencies:** Navigate to the project's root directory and install the necessary dependencies using npm or yarn:
 ``` 
	cd SummarizeAI
	npm install
 ```
 3. **Configure environment variables:** The app requires certain environment variables to function correctly. Create a new file named `.env` in the project's root directory and populate it with the required variables. Sample .env is given in `.sample.env`. You can get it from [API Link](https://rapidapi.com/restyler/api/article-extractor-and-summarizer) . For example:
 ```
	 VITE_RAPID_API_KEY =  YOUR_GPT_API_KEY
 ```
 4. **Start the development server:** Once the dependencies and environment variables are set up, you can start the development server using the following command:
 ```
	npm run dev
```
This will launch the app on a local development server, and you can access it by opening your browser and navigating to `http://localhost:3000`.

## Contributing

Contributions to the React Article Summary App are welcome! If you find any issues or would like to suggest enhancements, please submit an issue or create a pull request on the repository. We appreciate your feedback and support in making this app better.
