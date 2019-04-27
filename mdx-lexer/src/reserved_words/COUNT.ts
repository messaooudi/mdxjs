import { ITokenConfig , createToken } from "chevrotain";

const COUNT: ITokenConfig = {
    label: "COUNT key word",
    name: "count",
    pattern: /COUNT/
};

export default createToken(COUNT);