import { ITokenConfig , createToken } from "chevrotain";

const STORAGE: ITokenConfig = {
    name: "STORAGE key word",
    label: "storage",
    pattern: /STORAGE/
};

export default createToken(STORAGE);