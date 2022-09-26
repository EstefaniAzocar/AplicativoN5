import React, { useState, useContext } from "react";
import CartContext from "../../context/cartContext";
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom";
import { FaReply } from "react-icons/fa";



const AddProducts = () => {

    const { addProduct } = useContext(CartContext);

    const [producto, setProducto] = useState({
        id: new Date().getTime(),
        name: '',
        price: 0,
        image: '',
    });

    let navigate = useNavigate();

    const handleChenge = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {

        const fr = new FileReader()
        fr.readAsDataURL(e.target.files[0])
        fr.onload = function (carga) {
            const url = carga.currentTarget.result
            setProducto({
                ...producto,
                img: url
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(producto)
        setProducto({
            id: new Date().getTime(),
            name: '',
            price: 0,
            image: '',
        })
    }

    return (
        <div className={styles.formContainer}>
            <button className={styles.buttonRe} onClick={() => navigate('/')}><FaReply/></button>
            <h1>Nuevo producto</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label  htmlFor="name">Nombre:</label>
                    <input aria-label={'name'}
                        type="texto"
                        className="formInput"
                        name="name"
                        placeholder="Ingresar nombre"
                        defaultValue={producto.name}
                        onChange={handleChenge}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="price">Precio:</label>
                    <input aria-label={'price'}
                        type="number"
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
                <div className={styles.formGroup}>
                    <label htmlFor="img">Imagen:</label>
                    <input type="file"
                        className="formInput"
                        name="img"
                        onChange={handleImage}
                    />
                </div>
                <button className={styles.button} type="submit">
                    Guardar Producto
                </button>
            </form>

        </div>
    );
};

export default AddProducts;