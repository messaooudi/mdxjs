import { ITokenConfig , createToken } from "chevrotain";

const NEST: ITokenConfig = {
    name: "NEST key word",
    label: "nest",
    pattern: /NEST/
};

export default createToken(NEST);