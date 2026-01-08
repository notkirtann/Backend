import jwt from 'jsonwebtoken'

const jwtFunction = async()=>{
    const authToken = jwt.sign(
        {
            email:'kirtan123@gmail.com'
        },
        'thisismypass',
        {
            expiresIn : '7 min'
    })
    console.log(authToken);

    const data =jwt.verify(authToken,'thisismypass')
    console.log(data);

    
}
jwtFunction()