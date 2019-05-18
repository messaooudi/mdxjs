import { ITokenConfig , createToken } from "chevrotain";

const NEST: ITokenConfig = {
    name: "NEST",
    label: "nest",
    pattern: /NEST/
};

export default createToken(NEST);