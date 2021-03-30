import slice from "./slice";
import * as serviceSelectors from "./selectors";
import * as serviceOperations from "./operations";

export const serviceActions = slice.actions;
export default slice.reducer;
export { serviceSelectors, serviceOperations };
