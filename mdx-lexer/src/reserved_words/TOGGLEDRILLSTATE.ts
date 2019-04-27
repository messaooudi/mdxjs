import { ITokenConfig } from "chevrotain"

const TOGGLEDRILLSTATE: ITokenConfig = {
    label: "TOGGLEDRILLSTATE key word",
    name: "toggle drill state",
    pattern: /TOGGLEDRILLSTATE/
};

export default createToken(TOGGLEDRILLSTATE);