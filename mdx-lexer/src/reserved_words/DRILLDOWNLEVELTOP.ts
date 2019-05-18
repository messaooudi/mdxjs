import { ITokenConfig , createToken } from "chevrotain";

const DRILLDOWNLEVELTOP: ITokenConfig = {
    name: "DRILLDOWNLEVELTOP key word",
    label: "dirlldown level top",
    pattern: /DRILLDOWNLEVELTOP/
};

export default createToken(DRILLDOWNLEVELTOP);