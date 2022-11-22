import '../assets/Styles/Modal.css'

function Modal({children}) {
    return ( 
        <>
        <div className="back-modal">
            <div className="front-modal">
            {children}
            </div>
        </div>
        </>
     );
}

export default Modal;