import { Container, SignUpDiv, Form, Checkbox, ButtonSignUp } from './styles';

const App = () => {
  return (
    <Container>
      <SignUpDiv>
        <h1>Fazer Login</h1>
        <Form action="">
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Senha"/>
        </Form>
        <ButtonSignUp>Login</ButtonSignUp>
        <div>Não tem uma conta?
          <a href="#"> Crie sua conta</a>
        </div>
      </SignUpDiv>
    </Container>
  )
}
export default App;
