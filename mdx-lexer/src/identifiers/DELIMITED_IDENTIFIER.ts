import { ITokenConfig,createToken } from "chevrotain"

const DELIMITED_IDENTIFIER: ITokenConfig = {
    label: "DELIMITED_IDENTIFIER identifier",
    name: "delimited identifier",
    //FIXME: doesnt support double closing BRACKETS ]]
    pattern: /\[([^\]]{0,100})\]/
};

export default createToken(DELIMITED_IDENTIFIER);