import { ITokenConfig } from "chevrotain"

const DISTINCTCOUNT: ITokenConfig = {
    label: "DISTINCTCOUNT key word",
    name: "distinct count",
    pattern: /DISTINCTCOUNT/
};

export default createToken(DISTINCTCOUNT);