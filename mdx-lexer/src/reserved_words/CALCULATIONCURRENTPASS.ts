import { ITokenConfig , createToken } from "chevrotain";

const CALCULATIONCURRENTPASS: ITokenConfig = {
    name: "CALCULATIONCURRENTPASS",
    label: "calculation on current pass",
    pattern: /CALCULATIONCURRENTPASS/
};

export default createToken(CALCULATIONCURRENTPASS);