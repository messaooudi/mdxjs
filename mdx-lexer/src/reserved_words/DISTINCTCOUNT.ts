import { ITokenConfig , createToken } from "chevrotain";

const DISTINCTCOUNT: ITokenConfig = {
    name: "DISTINCTCOUNT",
    label: "distinct count",
    pattern: /DISTINCTCOUNT/
};

export default createToken(DISTINCTCOUNT);