// import { prisma } from "../config/db"

const register = async (req, res)=> {
    const body = req.body
    const {name, email, password} = req.body

    // const userExists = await prisma.user.findUnique({
    //     where: { email: email},
    // })

    // if (userExists) {
    //     return res.json()
        
    // }

    res.json(body)


}

export {register}