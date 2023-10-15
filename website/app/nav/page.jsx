import Link from "next/link";

const links = [
    {
        label : 'Home',
        route : '/'
    },{
        label : 'Quienes somos',
        route : '/quienes-somos'
    },{
        label : 'Mision y Vision',
        route : '/mision-y-vision'
    },{
        label : 'Productos',
        route : '/productos'
    },{
        label : 'Blog',
        route : '/blog'
    },
    
]
export default function Navbar () {
    return (
        <nav>
            <ul>
                {links.map(({ label,route }) => (
                    <li key={ route }>
                        <Link href={ route }> { label } </Link>
                    </li>
                ))}
            </ul>
        </nav>
        
    )
}