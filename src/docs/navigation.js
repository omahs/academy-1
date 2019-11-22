export const METRICS = {
  financial: {
    title: "Financial",
    articles: ["Mean coin age"],
  },
  development: {
    title: "Development",
    articles: [],
  },
  onchain: {
    title: "On-chain",
    articles: ["Daily Active Addresses", "MVRV", "EOS"],
  },
  social: {
    title: "Social/Sentiment",
    articles: ["Social data", "Sentiment metrics", "Social volume metrics", "Emerging trends"],
  },
}

export const SANBASE = {
  about: {
    title: "About Sanbase",
    articles: [],
  },
  myAccount: {
    title: "My account",
    articles: [],
  },
  pricingBilling: {
    title: "Pricing & Billing",
    articles: [],
  },
}

export const SHEETS = {
  about: {
    title: "About",
    articles: [],
  },
  functions: {
    title: "API reference",
    articles: ["Functions"],
  }
}

export const GRAPHS = {
  about: {
    title: "About Graphs",
    articles: [],
  },
  howWorks: {
    title: "How it works",
    articles: [],
  },
  metrics: {
    title: "Metrics",
    articles: ["Average token age consumed in days",
"Daily Active Addresses",
"Daily Active Deposits",
"Deposit Addresses",
"Deposit Related Transactions",
"Developer Activity",
"Exchange Flow",
"Exchange Flow Balance",
"MVRV Ratio",
"Network Growth",
"NVT ratio",
"Share of daily active deposits in total daily active addresses",
"Share of deposit transactions in total transactions",
"Social data feed",
"Social dominance",
"Social Volume",
"Token Age Consumed",
"Token Circulation",
"Top 100 transactions",
"Top holders",
"Top holders balance",
"Top holders changes",
"Top holders details",
"Top holders percent of total supply",
"Topic search",
"Transaction Volume",
"Velocity Of Tokens",
]
  }
}

export const NEURO = {
  about: {
    title: "API reference",
    articles: ["Exploring", "Available queries", "Available metrics"],
  },
  metrics: {
    title: "Metrics",
    articles: ["Daily Active Addresses", "Daily Active Deposits", "Developer Activity", "Exchange Funds Flow", "History Price", "MVRV Ratio", "Network Growth", "NVT ratio", "OHLC", "Percentage of token supply on exchanges", "Realized value", "Social Dominance", "Social Volume", "Token Age Consumed", "Token Age Consumed In Days", "Token Circulation", "Top Social Gainers Losers", "Topic search", "Transaction Volume", "Trending Words", "Velocity Of Tokens"],
  },
}

export const CATEGORIES = [
  {
    title: "Metrics",
    description:
      "Santiment brings a comprehensive set of metrics together in one place",
    blocks: [
      METRICS.financial,
      METRICS.social,
      // METRICS.development,
      METRICS.onchain,
    ],
  },
  // {
  //   title: "Sanbase",
  //   description:
  //     "Platform for in-depth coin analysis, low-latency signals, asset watchlists",
  //   blocks: [SANBASE.about, SANBASE.myAccount, SANBASE.pricingBilling],
  // },
  {
    title: "Sansheets",
    description: "Google Spreadsheet plugin for Santiment data",
    blocks: [
      SHEETS.about,
      SHEETS.functions,
    ],
  },
  {
    title: "Neuro API",
    description: "The most comprehensive crypto API on the market",
    blocks: [NEURO.about, NEURO.metrics],
  },
  {
    title: "Sangraphs",
    description:
      "Advanced on-chain, social and development metrics and charts for 700+ coins",
    blocks: [GRAPHS.metrics],
  },
]

export const GETTING_STARTED = {
  title: "Getting started",
  blocks: [
	  {
	  	title: "For traders"
	  },
	  {
	  	title: "For developers"
	  }
  ],
}
