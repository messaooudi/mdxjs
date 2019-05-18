import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNMEMBERBOTTOM: ITokenConfig = {
    name: "DRILLDOWNMEMBERBOTTOM key word",
    label: "drilldown member bottom",
    pattern: /DRILLDOWNMEMBERBOTTOM/
};

export default createToken(DRILLDOWNMEMBERBOTTOM);