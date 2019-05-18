import { ITokenConfig , createToken } from "chevrotain";

const COUNT: ITokenConfig = {
    name: "COUNT key word",
    label: "count",
    pattern: /COUNT/
};

export default createToken(COUNT);