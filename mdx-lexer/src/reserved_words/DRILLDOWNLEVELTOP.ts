import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNLEVELTOP: ITokenConfig = {
    name: "DRILLDOWNLEVELTOP",
    label: "dirlldown level top",
    pattern: /DRILLDOWNLEVELTOP/
};

export default createToken(DRILLDOWNLEVELTOP);