import { ITokenConfig , createToken } from "chevrotain";

const THIS: ITokenConfig = {
    name: "THIS",
    label: "this",
    pattern: /THIS/
};

export default createToken(THIS);