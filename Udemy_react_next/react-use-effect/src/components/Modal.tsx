import { useEffect } from "react";

const Modal = () => {

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Me ejecuto cada segundo");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Temporizador detenido");
    };

  }, []);

  return <div className="alert alert-warning">
      Este es un mensaje
    </div>;
};
export default Modal