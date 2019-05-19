import { ITokenConfig , createToken } from "chevrotain";

const TOGGLEDRILLSTATE: ITokenConfig = {
    name: "TOGGLEDRILLSTATE",
    label: "toggle drill state",
    pattern: /TOGGLEDRILLSTATE/
};

export default createToken(TOGGLEDRILLSTATE);