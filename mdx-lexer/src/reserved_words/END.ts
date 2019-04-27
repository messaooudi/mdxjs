import { ITokenConfig , createToken } from "chevrotain";

const END: ITokenConfig = {
    label: "END key word",
    name: "end",
    pattern: /END/
};

export default createToken(END);