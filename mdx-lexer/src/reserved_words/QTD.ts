import { ITokenConfig , createToken } from "chevrotain";

const QTD: ITokenConfig = {
    name: "QTD",
    label: "qtd",
    pattern: /QTD/
};

export default createToken(QTD);