export default function Footer(){
    return (
       <div className="flex items-center justify-between around  h-24 px-4 border-t-4  border-r-0 border-b-0 border-l-0 border-2">
           <section className="flex items-center justify-between w-1/4"> 
            <a href="github.com">Github</a>
            <a href="twitter.com">Twitter</a>
            <a href="google.com">email</a>
            </section>
            <section>
            <ul>
                <li>About us</li>
                <li>Contact</li>
            </ul>
            </section>
       </div>
    )
}