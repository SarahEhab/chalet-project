import { Container, Row, Col,Form ,Button} from "react-bootstrap";
import loginImg from "../../assets/images/login.svg";
import './Login.css'
const Login = () => {
  return (
    <Container>
        <Row className="justify-content-center text-center">
            <Col xs={12} lg={12} style={{width:'30%'}} className="login-page">
            <Col xs={12} lg={12}>
                <img src={loginImg} alt='login' className="w-100 mt-5"/>
                </Col>
                <Col xs={12} lg={12}>
                <h3>ادخل كود التسجيل</h3></Col>
                 <Form.Control type="password" maxLength={6} placeholder="ادخل كود التسجيل"  className='w-100 my-5'  style={{textAlignLast:'start',borderRadius:'20px',backgroundColor:'rgb(249 249 249 / 41%)'}}/>
                <Col xs={12} lg={12}>
<Button className='w-100' style={{backgroundColor:'#547AFF',borderRadius:'20px'}}>تسجيل الدخول</Button>
</Col>
            </Col>
            </Row>
    </Container>
  )
}

export default Login