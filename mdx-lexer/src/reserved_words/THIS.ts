import { ITokenConfig , createToken } from "chevrotain";

const THIS: ITokenConfig = {
    label: "THIS key word",
    name: "this",
    pattern: /THIS/
};

export default createToken(THIS);