import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="border-b-2 border-b-orange-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link 
                to="/" 
                className="text-3x1 font-bold tracking-tight text-orange-500">
                    FoodieFast.com
                </Link>
            </div>
        </div>
    );
};

export default Header;

// Reemplazar el color Orange por otro, o sino el fondo por un gris oscuro.
// En el Link podría agregar una imagen también.