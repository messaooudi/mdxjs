import { ITokenConfig , createToken } from "chevrotain";

const DISTINCTCOUNT: ITokenConfig = {
    name: "DISTINCTCOUNT key word",
    label: "distinct count",
    pattern: /DISTINCTCOUNT/
};

export default createToken(DISTINCTCOUNT);