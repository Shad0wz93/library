import { useState } from "react"

interface PropsModal{
    inContent:string
}

const Modal: React.FC<PropsModal> = ({inContent}) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false); 
    };

    if(showModal){
        return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{inContent}</p>
                <button onClick={closeModal}>Fermer</button>
            </div>
        </div>
        );
    }
    return (
        <button onClick={openModal}>Ouvrir</button>
    )
  };

  export default Modal;