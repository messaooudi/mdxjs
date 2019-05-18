import { ITokenConfig , createToken } from "chevrotain";

const END: ITokenConfig = {
    name: "END key word",
    label: "end",
    pattern: /END/
};

export default createToken(END);