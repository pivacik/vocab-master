import React from "react";
//Styling And Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const LongDef = ({ longDef }) => {
  return (
    <div>
      <h2>
        Other Defenitions of <i>cat</i>
      </h2>
      {longDef.map((word) => {
        return word.meanings.map((meaning) => {
          if (!meaning.hasOwnProperty("definitions")) return;
          return meaning.definitions.map((def) => {
            return (
              <div>
                <p>{def.definition}</p>
              </div>
            );
          });
        });
      })}
    </div>
  );
};

export default LongDef;
