import { motion } from "framer-motion";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { colors } from "../../utils/Colors";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.background};
  min-height: 100vh;
  flex-direction: column;
`;

export const Modal = styled(motion.div)`
  min-height: 420px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  background: ${colors.secondary};
  ${({ size }) =>
    size > 786 ? "width: 450px;margin-top: -90px;" : "width:100%;margin:10px;"}
`;

export const Head = styled.h2`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${colors.headColor};
  margin-bottom: 15px;
`;
export const Signup = styled(motion.div)`
  color: ${colors.secondary};
  ${({ size }) =>
    size > 786
      ? "position:absolute;top:4vh;right:2vw;"
      : "position:relative;margin-top:40px"};

  background: none;
  font-size: 0.7rem;
`;

export const Button = styled(motion.button)`
  margin-left: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border: none;
  cursor: pointer;
  background-color: ${colors.secondary};
  border: 3px solid ${colors.primary};
  color: ${colors.primaryAccent};
  font-weight: 600;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;
export const InputCover = styled.div`
  display: flex;
  margin: 10px 0;
  flex-direction: column;
`;
export const Input = styled.input`
  /* padding: 10px 15px; */
  height: 100%;
  border: none;
  margin-left: 10px;
  flex: 1;
  border-radius: 4px;
  outline: none;
`;
export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.primary};
`;

export const InputBox = styled.div`
  display: flex;
  height: 40px;
  width: 310px;
  align-items: center;
  border-radius: 4px;
  padding-left: 10px;
  background-color: white;
  border: 1px solid lightgray;
`;
export const HelperText = styled.span`
  font-size: 12px;
  margin-top: 1px;
  color: red;
`;

export const LoginButton = styled(motion.button)`
  border: none;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  background-color: ${colors.primary};
  color: ${colors.primaryAccent};
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.5s;

  :hover {
    background-color: ${colors.secondaryAccent};
    color: ${colors.secondary};
  }
`;

export const Google = styled(GoogleLogin)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: max-content;
`;
export const Rule = styled.span`
  width: 100%;
  margin: 10px 0 9px 0;
  height: 1px;
  border-bottom: 1px solid ${colors.contrast};
`;

export const Image = styled(motion.img)`
  width: 100px;
  position: absolute;
  left: 5vw;
  top: 0;
  margin: 15px;
`;
