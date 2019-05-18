import { ITokenConfig , createToken } from "chevrotain";

const THIS: ITokenConfig = {
    name: "THIS key word",
    label: "this",
    pattern: /THIS/
};

export default createToken(THIS);