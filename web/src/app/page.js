import { authorization } from "@/services/requests"

const Login = () => (
  <meta httpEquiv="refresh" content={`0;url=${authorization()}`}></meta>
)

export default Login