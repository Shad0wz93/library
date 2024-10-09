import { useState } from "react"
import '../../../assets/css/styleModal.css'

interface PropsModal{
    title: string
    content: string
    bkColor: string
    position: string
}

const Modal: React.FC<PropsModal> = ({title,content,bkColor,position="centered"}) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false); 
    };

    if(showModal){
        return (
        <div className={`modal-overlay ${position}`}>
            <div className={`bk ${bkColor}`}>
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={closeModal} className={`bt-modal-close ${bkColor}`}>Fermer</button>
            </div>
        </div>
        );
    }
    return (
        <button onClick={openModal}>Ouvrir</button>
    )
  };

  export default Modal;