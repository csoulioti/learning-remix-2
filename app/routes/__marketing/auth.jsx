import AuthForm from '~/components/auth/AuthForm';
import styles from'~/styles/auth.css';

export default function AuthPage() {
  return <AuthForm/>;
}
export function links() {
  return [{ rel:'stylesheet', href: styles }]
}