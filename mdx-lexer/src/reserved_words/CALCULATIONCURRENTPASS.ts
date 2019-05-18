import { ITokenConfig , createToken } from "chevrotain";

const CALCULATIONCURRENTPASS: ITokenConfig = {
    name: "CALCULATIONCURRENTPASS key word",
    label: "calculation on current pass",
    pattern: /CALCULATIONCURRENTPASS/
};

export default createToken(CALCULATIONCURRENTPASS);