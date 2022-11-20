import React, { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";
import PoolComponent from "./PoolComponent";
import TokenButton from "./TokenButton";
import { useTranslation } from "react-i18next";

const Pool = () => {
  const { liquidity } = useContext(TokenContext);
  const { t } = useTranslation();
  return (
    <PoolComponent>
      {liquidity.length === 0 ? (
        <p className="flex phone:flex-col  items-center  w-[424px] rounded-[25px] h-[50px] px-[20px]">
          {t("pool.liqNotFound")}
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
