import { authorization } from "@/services/requests"

export const Login = () => (
  <meta httpEquiv="refresh" content={`0;url=${authorization()}`}></meta>
)

export default Login