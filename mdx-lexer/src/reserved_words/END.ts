import { ITokenConfig , createToken } from "chevrotain";

const END: ITokenConfig = {
    name: "END",
    label: "end",
    pattern: /END/
};

export default createToken(END);