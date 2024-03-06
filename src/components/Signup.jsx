import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { useState, useEffect } from "react";
import { useHistory,Link } from "react-router-dom/cjs/react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar1 from "./Navbar";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  let history = useHistory();

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

  let registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      history.push('/login')
    } catch (err) {
      console.error(err);
    }
  };


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
                        <button onClick={registerUser}> Signup</button>
                        <button> <Link to={'/login'}>Signin</Link></button>
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop:"10px"}}>
                <Col>
                <button>
                    <Link to={'/aboutus'}>About us</Link>
                </button>
                </Col>
            </Container>
    </>
  );
};