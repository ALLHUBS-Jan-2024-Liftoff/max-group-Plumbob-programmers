import logo from "../images/Logo.png"
export default function LandingPage(){
    return (
        <div className=" flex items-center">
            <section className="w-1/2  ">
                <h1 className="text-5xl ">Find and Schedule with ease of mind!</h1>
                <p>Brief description of the application and how it can help</p>
            </section>
            <section className="w-1/2  ">
            <img src={logo} alt="Logo" className="pl-20" width={600}/>
            </section>
        </div>

    )
}