export const stories: Record<string, { overview: string; story: string }> = {
  "cart-score": {
    overview:
      "Photograph a grocery receipt and get a clearer picture of the whole cart: food scores, plain-English explanations, suggested swaps, and spending insights. Shopping history makes it easy to see how your habits change over time.",
    story:
      "Shipped on the App Store in July 2026. The experience brings an entire shopping trip into one report, while letting users correct receipt details and AI-generated results.",
  },
  "comic-dreamer": {
    overview:
      "Turn a remembered dream or story idea into an illustrated comic, then save it in a personal visual journal. Choose an art style, revisit your stories, and share the results.",
    story:
      "I designed and built Comic Dreamer to explore how quickly I could ship on an unfamiliar platform with AI-assisted development. What began as an experiment in Swift and generative AI is now live on the Apple App Store.",
  },
  "lucid-query": {
    overview:
      "A familiar file system with an AI conversation built in. Upload and organize documents, then ask questions and get answers grounded in their contents.",
    story:
      "As architect and full-stack contributor, I worked on the retrieval pipeline from text extraction to embeddings and contextual answers. Combining extraction libraries improved coverage across file types, while the project deepened my experience building RAG systems.",
  },
  "agentic-sf-config": {
    overview:
      "Describe a Salesforce configuration change in plain English. An AI agent generates the implementation and opens a pull request; human review and automated checks govern deployment.",
    story:
      "I built the agent and coordinated the flow across Salesforce, Lambda, GitHub, and CI. Repository context and formatting examples helped produce valid XML. Simple changes dropped from roughly 20 minutes to 2, with audit trails and review intact.",
  },
  "vehicle-tco-calculator": {
    overview:
      "Compare the full cost of owning different cars, including financing, fuel or charging, registration, and maintenance.",
    story:
      "A rapid prototyping experiment built in a few hours. I created the calculator to answer questions that existing tools did not cover, combining practical ownership costs in one straightforward comparison.",
  },
  cravey: {
    overview:
      "Help a group decide where to eat. People join a shared session, then upvote or veto nearby restaurant suggestions.",
    story:
      "I took the idea from UX exploration into development. Testing the economics revealed that location and image API costs would require a subscription the product could not justify, so I paused it—a valuable lesson in testing viability alongside usability.",
  },
  vida: {
    overview:
      "Give caregivers and families a clearer view of daily activity at home. Sensor data becomes a mobile view of routines, with alerts when unusual patterns may need attention.",
    story:
      "I contributed backend development, mobile work, and interface design while coordinating with three teams across time zones. The project expanded my experience with REST APIs, distributed collaboration, and the realities of App Store releases.",
  },
  fitrac: {
    overview:
      "A personal finance tracker built around control: customizable features, ownership of my data, and negligible running costs.",
    story:
      "I designed and built FiTrac across React and a serverless AWS backend. DynamoDB taught me the tradeoffs of NoSQL modeling. The app became part of my daily routine and runs for less than a dollar per month.",
  },
};
