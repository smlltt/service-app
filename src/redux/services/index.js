import slice from "./slice";
import * as servicesSelectors from "./selectors";
import * as servicesOperations from "./operations";

export const servicesActions = slice.actions;
export default slice.reducer;
export { servicesSelectors, servicesOperations };
