import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNLEVELBOTTOM: ITokenConfig = {
    name: "DRILLDOWNLEVELBOTTOM key word",
    label: "drilldown level bottom",
    pattern: /DRILLDOWNLEVELBOTTOM/
};

export default createToken(DRILLDOWNLEVELBOTTOM);