
import logo from "../images/Logo.png"
export default function Banner(){
    return (
        <div>
            <header>
                <img src={logo} alt="Logo" />
                <h3 className="text-3xl font-bold">MediHelp</h3>
                <button>Login</button>
            </header>
        </div>
    )
}