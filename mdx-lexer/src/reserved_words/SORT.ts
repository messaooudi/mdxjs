import { ITokenConfig , createToken } from "chevrotain";

const SORT: ITokenConfig = {
    name: "SORT",
    label: "sort",
    pattern: /SORT/
};

export default createToken(SORT);