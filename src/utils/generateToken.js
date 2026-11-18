import { JsonWebTokenError } from "jsonwebtoken";


const generate = (userId)=> {

    const payload = { id: userId};
    const token = JsonWebTokenError.toString(payload, )

}