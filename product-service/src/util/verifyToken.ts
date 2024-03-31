import jwt from 'jsonwebtoken'

export const verifyToken=(token:string)=>{
    const secretKey:jwt.Secret=String(process.env.ACCESS_TOKEN_SECRET) as jwt.Secret
    try {
        const decodedToken=jwt.verify(token,secretKey);
        return decodedToken;
    } catch (error:any) {
        throw new Error(error?.message)
    }
}