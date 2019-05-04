import { ITokenConfig , createToken } from "chevrotain";

const STORAGE: ITokenConfig = {
    label: "STORAGE key word",
    name: "storage",
    pattern: /STORAGE/
};

export default createToken(STORAGE);