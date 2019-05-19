import { ITokenConfig , createToken } from "chevrotain";

const COUNT: ITokenConfig = {
    name: "COUNT",
    label: "count",
    pattern: /COUNT/
};

export default createToken(COUNT);