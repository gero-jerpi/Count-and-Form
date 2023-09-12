"use client"
import { useRef } from "react";

export default function Contacto() {
    const inputNombre = useRef()
    const inputEmail = useRef()
    const inputMensaje = useRef()

    return (
        <section className="contacto">
            <div>
                <h1>¡Esta es la página para contactarnos!</h1>
                <p>Nombre: Geronimo Jerpi</p>
                <p>Telefono: 2235759592 </p>
                <p>Dirección: Alberti 2315</p>
            </div>

            <div className="form">
                <h2>Contacto</h2>
                <input ref={inputNombre} type="text" placeholder="Nombre"/>
                <input ref={inputEmail} type="text" placeholder="Email"/>
                <textarea type="text" ref={inputMensaje} placeholder="Mensaje"/>
                <button onClick={() => {
                    alert("¡Enviado correctamente!")
                    console.log(
                        `
                        Nombre: ${inputNombre.current.value} \n
                        Email: ${inputEmail.current.value} \n
                        Mensaje: ${inputMensaje.current.value}
                        `
                    )
                    inputNombre.current.value = ""
                    inputEmail.current.value = ""
                    inputMensaje.current.value = ""

                }}>Enviar</button>
            </div>

        </section>
    )
}