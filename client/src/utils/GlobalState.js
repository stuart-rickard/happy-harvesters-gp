import React, { createContext, useContext } from "react";
import { useAppReducer } from "./reducers";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const GlobalProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useAppReducer({
    username: "Happiest Harvester",
    email: "happy@harvester.com",
    password: "password",
    money: 100,
    appleCount: 500,
    gemCount: 20,

    gameVariables: {
      initialAppleInventory: 5,
      applesForNewTree: 3,
      appleGrowTime: 30,
      appleSaleRevenue: 1,
      juicerCost: 10,
      masherCost: 14,
      ovenCost: 30,
      makeJuiceTime: 60,
      makeJuiceApplesUsed: 2,
      sauceMashTime: 120,
      sauceMashApplesUsed: 4,
      pieBakeTime: 300,
      pieBakeApplesUsed: 8,
      juiceSaleRevenue: 4, // this is revenue from sale of each juice
      sauceSaleRevenue: 8,
      pieSaleRevenue: 20,
      gemPurchaseCost: 0.99,
      gemsFromPurchase: 5,
    },
    mashers: [{}, {}, {}, {}, {}],
    juicers: [
      {
      _id: 1,
      startedAtTime: new Date(),
      duration: 5,
     },
     {
      _id: 2,
      startedAtTime: new Date(new Date().getTime() - 25 * 100),
      duration: 10,
     },
     {
       _id: 3,
       startedAtTime: new Date(new Date().getTime() - 25 * 100),
       duration: 30,
      },
      {
       _id: 4,
       startedAtTime: new Date(new Date().getTime() - 25 * 100),
       duration: 60,
      },
     {}],
    ovens: [{}, {}, {}, {}, {}],
    trees: [{}, {}, {}, {}, {}],
    orchards: [
      {
        _id: 1,
        trees: [],
      },
    ],
    currentOrchard: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
