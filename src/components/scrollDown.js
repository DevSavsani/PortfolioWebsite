import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
//   .turn {
//     cursor: pointer;
//     transform: rotate(90deg);
  }
`;

function scrollDown() {
    return (
        <MyScroll>
            <div className="turn">
                <span> <FontAwesomeIcon icon={faAngleDoubleDown}/> </span>
            </div>
            {/* <div className="turn">
                <span> &gt; </span>
            </div> */}
        </MyScroll>
    )
}

export default scrollDown
