import { ITokenConfig , createToken } from "chevrotain";

const CALCULATIONCURRENTPASS: ITokenConfig = {
    label: "CALCULATIONCURRENTPASS key word",
    name: "calculation on current pass",
    pattern: /CALCULATIONCURRENTPASS/
};

export default createToken(CALCULATIONCURRENTPASS);