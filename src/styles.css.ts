import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const parentRecipe = recipe({
  variants: {
    // Case 1 => Causes selectors to merge
    type: { regular: {}, special: "" },

    // Case 2 => Ok, as long as 'regular' is not used as a selector
    // type: { regular: "", special: { textAlign: "left" } },

    // Case 3 => Ok
    // type: { regular: {}, special: {} },
  },
  defaultVariants: {
    type: "regular",
  },
});

const parentClasses = {
  base: parentRecipe.classNames.base,
  special: parentRecipe.classNames.variants.type.special,
};

export const childClass = style({
  selectors: {
    [`${parentClasses.special} &`]: {
      color: "red",
    },
  },
});
