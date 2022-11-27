
//----// make a usersCollection when user is register (step-0) follow from here----//----//

//-------------------------in Server side-------------------------------------
$ npm i jsonwebtoken // install and require it in server (step-1)

const jwt = require('jsonwebtoken');

//create AccessToken (step-2)
//open Terminal
node
require('crypto').randomBytes(64).toString('hex')

//set this token in .env variable


// create this API (step-3)
app.get('/jwt', async(req,res)=>{
    const email = req.query.email
    const query = {email:email}
    const user = await usersCollection.findOne(query)

    if(user){
      const token = jwt.sign({email},process.env.ACCESS_TOKEN,{expiresIn:'1h'})
      return res.send({accessToken: token})
    }
    res.status(403).send({accessToken:''})
  })

  //---------------------in Client Side ---------------------

  //create a hook for named useToken . look up in hooks folder (step-4)
  
  //in Client Side - top of register.js file (step-5)
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail)
  const navigate = useNavigate();
  if(token){
  navigate('/')
  }

//use it in Client Side getAPI (step-6)
 ,{ headers: {
    authorization:  `Bearer ${localStorage.getItem('accessToken')}}` //for jwt
  }}


//in Server side create this function for verifying JWt (step-7)
function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decodedToken) {
    if (err) {
      return res.status(403).json({
        status: 403,
        message: "Forbidden",
      });
    }
    req.decodedToken = decodedToken;
    next();
  });
}
//in server side call verifyJWT and write it (step-8)
const decodedEmail = req.decoded.email

      if(email !== decodedEmail){
        return res.status(403).json({
                  status: 403,
                  message: "Forbidden",

        })
      }

//in Client Side - top of register.js file (step-9)
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)
  const navigate = useNavigate();
  if(token){
  navigate('/')
  }