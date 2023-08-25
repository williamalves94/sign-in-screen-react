import { Container, SignUpDiv, Form, ButtonSignUp, TextDiv } from './styles';

const App = () => {
  return (
    <Container>
      <SignUpDiv>
        <h1>Login</h1>
        <Form action="">
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Senha"/>
        </Form>
        <ButtonSignUp>Login</ButtonSignUp>
        <TextDiv>Não tem uma conta?
          <a href="#"> Crie sua conta</a>
        </TextDiv>
      </SignUpDiv>
    </Container>
  )
}
export default App;
