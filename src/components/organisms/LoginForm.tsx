import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";



function LoginForm() {
  return (
    <div className=" w-full md:w-1/2 min-h-screen-hero flex justify-center items-center">
      <form className="flex flex-col gap-4 w-[400px]">
        <h3 className="text-center font-bold">Login</h3>
        <Input type="email" className="border p-2 rounded-sm" placeholder="Email" />
        <Input type="password" className="border p-2 rounded-sm" placeholder="Mot de passe" />
        <div className=" flex items-center gap-2">
          <Input type="checkbox" className="border p-2 rounded-sm" />
          <span>Kepp me logged in</span>
        </div>
        <Button className="bg-[#2463eb] text-white rounded-sm p-2" >Se connecter</Button>
        <p>Mot de passe oublier? <a href="/" className="text-[#3b82f6]">Reinitialiser</a></p>
      </form>
    </div>
  );
}

export default LoginForm;