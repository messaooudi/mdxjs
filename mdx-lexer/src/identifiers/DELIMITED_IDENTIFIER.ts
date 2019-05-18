import { ITokenConfig,createToken } from "chevrotain"

const DELIMITED_IDENTIFIER: ITokenConfig = {
    name: "DELIMITED_IDENTIFIER identifier",
    label: "delimited identifier",
    //FIXME: doesnt support double closing BRACKETS ]]
    pattern: /\[([^\]]{0,100})\]/
};

export default createToken(DELIMITED_IDENTIFIER);