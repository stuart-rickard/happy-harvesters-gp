import React, { createContext, useContext } from "react";
import { useAppReducer } from "./reducers";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const defaultGameVariables = {
  initialAppleInventory: 5,
  // for Tree
  applesForNewTree: 3,
  appleGrowTime: 5,
  applesGrown: 5,
  appleSaleRevenue: 1,
  // for Juncer
  juicerCost: 10,
  makeJuiceTime: 5,
  makeJuiceApplesUsed: 2,
  juiceSaleRevenue: 4, // this is revenue from sale of each juice
  // for Masher
  masherCost: 14,
  makeSauceTime: 5,
  makeSauceApplesUsed: 4,
  sauceSaleRevenue: 8,
  //for Oven
  ovenCost: 30,
  makePieTime: 5,
  makePieApplesUsed: 8,
  pieSaleRevenue: 20,
  // for gems
  gemPurchaseCost: 0.99,
  gemsFromPurchase: 5,
};

const GlobalProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useAppReducer({
    // TODO: username, email, and password should not be hard coded
    username: "",
    email: "",
    password: "",
    money: 100,

    appleCount: 50,
    gemCount: 0,

    gameVariables: defaultGameVariables,
    trees: [{}],
    mashers: [],
    juicers: [],
    ovens: [],
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
