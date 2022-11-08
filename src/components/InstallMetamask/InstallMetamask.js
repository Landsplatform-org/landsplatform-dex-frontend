import React, { memo } from "react";

const styles = {
  noWalletBackground: `h-screen w-screen flex flex-col justify-center items-center bg-white`,
  installCard: `w-300 h-1/4 flex flex-col justify-center items-center bg-white rounded-2xl p-2`,
  installTitle: `
    text-[#373c3d] text-xl font-bold
    phone:text-center
  `,
  installButton: `mt-6 px-10 py-3 bg-[#049CA6] border-2 border-[#049CA6] rounded-full text-white hover:bg-transparent hover:text-[#049ca6] transition duration-100`,
};

const InstallMetamask = memo(() => {
  return (
    <div className={styles.noWalletBackground}>
      <div className={styles.installCard}>
        <h1 className={styles.installTitle}>
          Установите <span className="text-[#F5841F]">MetaMask</span> для дальнейшей работы
        </h1>
        <a href="https://metamask.io/" target="_blank" rel="noreferrer">
          <button className={styles.installButton}>Установить?</button>
        </a>
      </div>
    </div>
  );
});

export default InstallMetamask;
