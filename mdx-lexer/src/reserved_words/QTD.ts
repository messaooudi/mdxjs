import { ITokenConfig , createToken } from "chevrotain";

const QTD: ITokenConfig = {
    name: "QTD key word",
    label: "qtd",
    pattern: /QTD/
};

export default createToken(QTD);