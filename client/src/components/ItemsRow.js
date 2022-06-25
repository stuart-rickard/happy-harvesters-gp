import { useEffect } from "react";
import { useGlobalContext } from "../utils/GlobalState";

import { useIsMount } from "../utils/helpers";

import {
  APPLES_FOR_JUICE,
  APPLES_USED_FOR_PRODUCT,
  BUY_JUICER,
  SELL_JUICE,
  UPDATE_JUICER,
} from "../utils/actions";

import Item from "./Item";
import BuyItem from "./BuyItem";

export default function ItemsRow(props) {
  const { sendInventoryToDB, testVar } = props;

  const [state, dispatch] = useGlobalContext();

  const juicers = state?.juicers || [];

  // if (loading)
  //   return (
  //     <div>
  //       <h1>LOADING....</h1>
  //     </div>
  //   );

  const handleUpgradePurchased = async (event) => {
    // validate enough money
    if (state.money < state.gameVariables.juicerCost) {
      return;
    }

    dispatch({
      type: BUY_JUICER,
      payload: {
        _id: state.juicers.length + 1,
        startedAtTime: new Date(),
        duration: state.gameVariables.makeJuiceTime,
      },
    });
    sendInventoryToDB(state);
    console.log("testVar is: ");
    console.log(testVar);
  };

  return (
    <div>
      <div className="item-row">
        {
          <div className="item-scroll">
            {
              // map thru item objects from GlobalState to add to row
              juicers.map((juicer, i) => {
                return (
                  <div key={i} className="item-box">
                    <Item
                      _id={juicer._id}
                      juicer={juicer}
                      dispatchParent={dispatch}
                      sendInventoryToDB={sendInventoryToDB}
                    />
                  </div>
                );
              })
            }
            {juicers.length < 5 && (
              <BuyItem handleUpgradePurchased={handleUpgradePurchased} />
            )}
          </div>
        }
      </div>
      <div className="dash-label">
        <span className="item-label">Item</span>
        <div className="item-price">
          <p className="item-price-buy">
            Buy New: <span className="item-amount">10</span>
          </p>
          <p className="item-price-apples">
            Uses: <span className="item-amount">2</span>
          </p>
        </div>
      </div>
    </div>
  );
}
