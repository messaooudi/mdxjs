import { ITokenConfig , createToken } from "chevrotain";

const DRILLUPLEVEL: ITokenConfig = {
    name: "DRILLUPLEVEL key word",
    label: "drillup level",
    pattern: /DRILLUPLEVEL/
};

export default createToken(DRILLUPLEVEL);