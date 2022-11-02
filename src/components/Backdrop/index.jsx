import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Backdrop = ({children, onClick}) => {

    return (
        <BackdropDiv
        onClick={onClick} 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        exit={{opacity:0}}
        >
            {children}
        </BackdropDiv>
    )

};

export default Backdrop

export const BackdropDiv = styled(motion.div)`
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    background: #000000e1;
    display: flex;
    align-items: center;
    justify-content: center;
`;