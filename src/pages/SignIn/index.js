import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Label } from '../../components/Auth';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';
import logo from '../../assets/images/logo_black.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/home');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 

  return (
    <AuthLayout>
      <Row>
        <img src={logo} alt="Event Logo" width="130px" style = {{ opacity: 0.5 }}/>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value) } />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-up" styled={{ opacity: 0.8 }}>Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
