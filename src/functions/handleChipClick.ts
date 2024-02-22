// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const HandleChipClick = (index: number) => {
//     const { setSelectedChip }: { setSelectedChip: (index: number) => void } = useContext(AppContext);
//     setSelectedChip(index);
// };

// export default HandleChipClick;

// HandleChipClick.ts
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const HandleChipClick = (index: number) => {
  const { setSelectedChip } = useContext(AppContext);
  setSelectedChip(index);
};

export default HandleChipClick;
