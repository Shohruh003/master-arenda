import { useEffect, useRef } from "react";
import "./modal.scss";

export const Modal = ({modal , setModal, children}) => {

  const elOverlay = useRef();
  const closeModal = (evt) => {
    if(evt.target === elOverlay.current) {
      setModal(false);
    }
  }

  useEffect(() => {

    function handleCloseModal(evt) {
      if (evt.code === "Escape") {
        setModal(false)
      }
    }

    if(modal) {
      window.addEventListener("keyup",handleCloseModal);
    }

    return () => window.removeEventListener('keyup', handleCloseModal)
  },[modal])

  return (
    <div 
    ref={elOverlay}
    onClick={closeModal} 
    className={`overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ${!modal && 'd-none'}`}>
      <div className="modal-main w-50 bg-white p-4">

          <button onClick={() => setModal(false)} className="btn btn-danger exit">&times;</button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}