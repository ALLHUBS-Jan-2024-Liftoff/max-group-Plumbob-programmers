import { Outlet, Link } from "react-router-dom";

export default function Footer(){
    const githubLink = 'https://github.com/ALLHUBS-Jan-2024-Liftoff/max-group-Plumbob-programmers'
    return (
       <div className="flex items-center justify-between around  h-24 px-4 border-t-4  border-r-0 border-b-0 border-l-0 border-2">
           <section className="flex items-center justify-between w-1/4"> 
            <a href={githubLink}
            className="hover:underline hover:text-blue-600"
            >Github</a>
            </section>
            <section>
            <ul>
                <Link to={"/about"}><li>About us</li></Link>
            </ul>
            </section>
       </div>
    )
}