import Cartwidget from "./Cartwidget";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const catCollection = collection(db, 'categorias');
        getDocs(catCollection)
            .then((res) => {
                const secciones = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setCategories(secciones);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <header>
        <nav>
                <div className="logo">
                <Link to="/">
                        <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                        <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" className="ccustom" fill="#FF7A00"></path> 
                        <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" className="ccompli1" fill="#FF9736"></path> 
                        <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" className="ccompli2" fill="#FFBC7D"></path> </svg>
                </Link>
                <Link to="/">
                    <h1 className="tituloPrincipal">FAG - Tienda Futbolera</h1>
                </Link>
            </div>

            <div className="contenedorNavegacion">
                <ul className="navegacion">
                {categories.map((cat) => (
                    <NavLink
                        key={cat.id}
                        className="links"
                        to={`/categoria/${cat.path}`}
                    >
                        {cat.title}
                    </NavLink>
                ))}
                <Link to="/cart"><Cartwidget/></Link>
            </ul>
            </div>
                
        </nav>
    </header>
)
}

export default Navbar;