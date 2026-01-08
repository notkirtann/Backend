import bcrypt from 'bcrypt'

const myFunction = async()=>{
    const password = "HalaMadrid@123"
    const hashPass = await bcrypt.hash(password,8)

    console.log(hashPass);

    const isMatch = await bcrypt.compare('HalaMadrid@123',hashPass)

    console.log(isMatch); 
}
myFunction()