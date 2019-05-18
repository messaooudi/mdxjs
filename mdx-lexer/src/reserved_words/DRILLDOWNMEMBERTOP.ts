import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNMEMBERTOP: ITokenConfig = {
    name: "DRILLDOWNMEMBERTOP key word",
    label: "drilldown memeber top",
    pattern: /DRILLDOWNMEMBERTOP/
};

export default createToken(DRILLDOWNMEMBERTOP);