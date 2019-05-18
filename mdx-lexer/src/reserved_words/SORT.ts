import { ITokenConfig , createToken } from "chevrotain";

const SORT: ITokenConfig = {
    name: "SORT key word",
    label: "sort",
    pattern: /SORT/
};

export default createToken(SORT);