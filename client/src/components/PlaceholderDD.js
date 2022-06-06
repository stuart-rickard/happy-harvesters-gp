import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import placeholderTreeImage from "../assets/images/placeholder-tree.png";
import { useGlobalContext } from "../utils/GlobalState";
import { PURCHASE_A_TREE } from "../utils/actions";
import { ADD_TREE_ARRAY } from "../utils/mutations";

import emptyPlot from "../assets/images/empty-plot-with-leaf.svg";

// import { ADD_TREE } from '../utils/mutations'

export default function PlaceholderDD() {
  // error checking: 1) this component shouldn't show if player has less than 3 apples, but I think this would happen at the parent component

  const [state, dispatch] = useGlobalContext();
  // define [addTree, { error }] = useMutation(ADD_TREE)
  const [addTreeArray, { error }] = useMutation(ADD_TREE_ARRAY);
  const { trees } = state;

  const handleTreeArray = async (evt) => {
    console.log("appleCount", state.appleCount);
    if (state.appleCount < state.gameVariables.applesForNewTree) {
      return;
    }
    console.log("in handleTreeArray");

    try {
      await addTreeArray();
    } catch (err) {
      console.error(err);
    }

    console.log("dispatching to GameState");
    try {
      const payload = {
        _id: trees.length + 1,
        startedAtTime: new Date(),
        duration: state.gameVariables.appleGrowTime,
      };
      dispatch({
        type: PURCHASE_A_TREE,
        payload,
      });
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div className="item-box relative tree-item">
        <img src={emptyPlot} className="empty-plot" alt=""></img>
        <div className="">
          <button className="btn btn-harvest" onClick={handleTreeArray}>
            Tree Array
          </button>
        </div>
      </div>
    </>
  );
}
