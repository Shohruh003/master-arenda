import { useEffect, useRef } from "react";
import TrueIcon from '../../Images/true.png'
import "./modal.scss";

export const TrueModal = ({trueModal , setTrueModal}) => {

  const elTrueOverlay = useRef();
  const closeTrueModal = (evt) => {
    if(evt.target === elTrueOverlay.current) {
      setTrueModal(false);
    }
  }

  useEffect(() => {

    function handleCloseTrueModal(evt) {
      if (evt.code === "Escape") {
        setTrueModal(false)
      }
    }

    if(trueModal) {
      window.addEventListener("keyup",handleCloseTrueModal);
    }

    return () => window.removeEventListener('keyup', handleCloseTrueModal)
  },[trueModal])

  return (
    <div 
    ref={elTrueOverlay}
    onClick={closeTrueModal} 
    className={`overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ${!trueModal && 'd-none'}`}>
      <div className="modal-main w-50 bg-white p-4">
          <img src={TrueIcon} alt="true-icon" width='200' height='200' />
          <button onClick={() => setTrueModal(false)} className="btn btn-primary ok" type="submit">Ok</button>
      </div>
    </div>
  )
}