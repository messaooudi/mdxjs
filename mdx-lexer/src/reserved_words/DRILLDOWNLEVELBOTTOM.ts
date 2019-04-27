import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNLEVELBOTTOM: ITokenConfig = {
    label: "DRILLDOWNLEVELBOTTOM key word",
    name: "drilldown level bottom",
    pattern: /DRILLDOWNLEVELBOTTOM/
};

export default createToken(DRILLDOWNLEVELBOTTOM);