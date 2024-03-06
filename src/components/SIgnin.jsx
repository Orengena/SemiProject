import { auth, googleProvider } from "../firebase-config";
import {
    signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [errorMessage, seterrorMessage] = useState("");
    const [resetMessage, setResetMessage] = useState("");
    const [emailSend, setEmailSend] = useState("")

    useEffect(() => {
        let changedUser = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => changedUser();
    }, []);

    let signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            history.push('/home')
        } catch (err) {
            console.error(err);
            seterrorMessage("wrong user name or password");
            setResetMessage("forget your password for reset press here")
            console.log(errorMessage)
        }
    };


    let googleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            history.push('/home')
        }
        catch (err) {
            console.error(err);

        }
    }

    let resetpass = async () =>{
        try{
            await sendPasswordResetEmail(auth, email)
            setEmailSend("check your inbox")
        }
        catch (err){
            console.error(err)
        }
    }



    const history = useHistory();

    return (
        <>
            <Container style={{border:"solid" , borderColor:"gray"}}>
                <Row>
                    <Col>
                        <img src="Logo1.PNG" alt="" style={{ height: "150px", width: "250px" }} />
                    </Col>
                </Row>
                <Row className="email">
                    <Col>
                        <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Row>

                <Row className="password">
                    <Col>
                        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                </Row>

                <Row className="buttons">
                    <Col>
                        <button onClick={signIn}> Log in</button>
                        <button onClick={googleSignIn}>Login with google</button>
                    </Col>
                </Row>

                {user ? (
                    <>

                    </>
                ) : (
                    <>
                        <div>
                            <p style={{color:"red"}}>
                           {errorMessage}
                           </p>
                           <p onClick={resetpass} style={{cursor:"pointer"}} >{resetMessage}</p>
                           <p>{emailSend}</p>
                        </div>
                    </>
                )}

              
            </Container>
            <Container style={{marginTop:"60px"}}>
            <Row className="Signup">
                    <Col>
                        <p>Don't have an account?</p>
                    </Col>
                    <Col>
                        <button>  <Link to={'/signup'}>Create new</Link></button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Col>
                <button>
                    <Link to={'/aboutus'}>About us</Link>
                </button>
                </Col>
            </Container>
        </>

    );
};
