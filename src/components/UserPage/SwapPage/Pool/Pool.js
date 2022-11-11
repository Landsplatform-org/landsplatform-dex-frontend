import React, { useContext } from "react";
import { TokenContext } from "../../../../context/TokenContext";
import PoolComponent from "./PoolComponent";
import TokenButton from "./TokenButton";

const Pool = () => {
  const { liquidity } = useContext(TokenContext);

  return (
    <PoolComponent>
      {liquidity.length === 0 ? (
        <p className="flex items-center w-[424px] rounded-[25px] h-[50px] px-[20px]">
          Ликвидность не найдена
        </p>
      ) : (
        <div className="flex flex-col gap-5">
          {liquidity.map((item, index) => (
            <TokenButton item={item} index={index} />
          ))}
        </div>
      )}
    </PoolComponent>
  );
};

export default Pool;
