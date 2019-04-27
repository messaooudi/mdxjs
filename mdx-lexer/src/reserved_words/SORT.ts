import { ITokenConfig } from "chevrotain"

const SORT: ITokenConfig = {
    label: "SORT key word",
    name: "sort",
    pattern: /SORT/
};

export default createToken(SORT);