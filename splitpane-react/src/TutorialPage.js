import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "./SplitPane";
import React from 'react'
import QuoteContext from "./QuoteContext";
import { useState } from "react";

import "./App.css";

const quotes = [
  {
    id: 1,
    author: "1",
    description:
      "This is your wallet! Each new user starts with $100,000. \
      Your wallet contains: \
      1. A list of all the currencies that you currently own and their quantities, \
      2. The current exchange rates for those currencies in USD, \
      3. The value of each currency in current USD, and \
      4. The total value of your wallet, which is reported to the leaderboard.",
    title: "User Profile"
  },
  {
    id: 2,
    author: "2",
    description: "This is the buy page! \
    This shows a list of all the currencies that you can purchase with USD, \
    and it also shows how the exchange rates have changed over time. \
    You can buy any currency you want with the USD in your wallet, \
    and try to grow your account over time.",
    title: "How to buy currency"
  },
  {
    id: 3,
    author: "3",
    description:
      "This is the sell page! \
      This shows a list of all of the currencies that you can sell for USD, \
      and it also shows how the exchange rates have changed over time. \
      Currently, you can only convert sell your currencies for USD.",
    title: "How to sell currency"
  },
  {
    id: 4,
    author: "4",
    description:
      "This is the history page. \
      You can see a list of all the transactions that you've made during the last 30 days here. \
      There are no transaction fees, so if you mistakenly buy/sell the wrong currency, \
      then it's easy to fix your mistake with no penalty!",
    title: "Check your buy/sell history"
  },
  {
    id: 5,
    author: "5",
    description:
      "Exchange rates update daily at midnight PST. \
      Click the Change Rates button below, to see an example! \
      But let's simulate a price change for this tutorial! \
      You currently have 1000 USD, and 100,000 YEN worth 766.92 USD in his wallet. \
      Your wallet total is $1,858.92. Click this button to simulate one day of price changes. \
      The YEN exchange rate has increased/decreased from X to Y. \
      Your YEN has increased/decreased in value by XXX, \
      and the total value of your wallet has increased/decreased by XXX to Z.",
    title: "Exchange rate updates"
  },
  {
    id: 6,
    author: "6",
    description:
      "These are the leaderboards. \
      You can compete with your peers! \
      On this page you can see how much money the top users have in their wallet, \
      as well as the top 2 currencies that are currently held in their wallet. \
      So if you don't know which currencies to start buying, \
      then you can look at the leaderboard for tips.",
    title: "Leaderboards"
  },
  {
    id: 7,
    author: "7",
    description:
      "Congratulations on completing the tutorial! \
      Sign up now to get your $100,000 and start playing right away!",
    title: "Tutorial complete!"
  }
];

let currencyBeforeAdj = {}
let currencyAdj = {}
let currencyAfterAdj = {}


function Slider() {
  const [currQuote, setCurrQuote] = useState(1);

  return (
      <div className="App">
        <QuoteContext.Provider value={{ quotes, currQuote, setCurrQuote }}>
          <SplitPane className="split-pane-row">
            <SplitPaneLeft>
              <SplitPane className="split-pane-col">
                <SplitPaneTop />
                <Divider className="separator-row" />
                <SplitPaneBottom />
              </SplitPane>
            </SplitPaneLeft>
            <Divider className="separator-col" />

            <SplitPaneRight />
          </SplitPane>
        </QuoteContext.Provider>
      </div>
  );
}

export default Slider;