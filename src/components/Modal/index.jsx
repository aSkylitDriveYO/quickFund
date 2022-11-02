import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import styled from 'styled-components'

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 0,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};


const Modal = ({handleClose, text}) => {

    return (
        <Backdrop onClick={handleClose}>
            <ModalDiv
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </ModalDiv>

        </Backdrop>
    )
}

export default Modal;








export const ModalDiv = styled(motion.div)`
    width: clamp(50%,70%,90%);
    height: min-content(50%,300pc);

    margin: auto;
    padding:0 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;





