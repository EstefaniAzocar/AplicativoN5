import React, {useState} from "react";

const AddProducts = () => {

    const [producto, setProducto] = useState({
        name: '',
        price: null,
        image: null
    });

    const handleChenge =(e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {
        setProducto({
            ...producto,
            image: e.target.files[0]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="formContainer">
            <h2>Nuevo producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="texto" 
                        className="formInput" 
                        name="name" 
                        placeholder="Ingresar nombre" 
                        defaultValue={producto.name} 
                        onChange={handleChenge} 
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Precio:</label>
                    <input type="number" 
                        className="formInput" 
                        name="price"
                        step="1"
                        min="0" 
                        placeholder="Ingresar precio" 
                        defaultValue={producto.precio} 
                        onChange={handleChenge} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Imagen:</label>
                    <input type="file" 
                        className="formInput" 
                        name="img" 
                        onChange={handleImage} 
                    />
                </div>
                <button type="submit" className="btn">
                    Guardar Producto
                </button>
            </form>

        </div>
    );
};

export default AddProducts;