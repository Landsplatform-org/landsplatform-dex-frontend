import React from 'react';
import { whereBuyList } from './whereBuyList';

const styles = {
  wrapper: `w-screen h-[50vh] flex flex-col justify-center items-center`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  title: `
    mt-18 text-[2.75rem] font-semibold
    phone:text-[1.875rem] phone:text-center phone:mt-16
    tablet:text-center
  `,
  whereBuyContainer: `
    flex flex-row flex-wrap w-full h-max my-12
    phone:justify-center
    tablet:justify-center
  `,
  whereBuyContent: `
    flex justify-center w-[250px] mr-6 my-1 p-3 bg-[#eaeaea] rounded-3xl text-[#373c3d] font-semibold hover:bg-[#049ca6] hover:text-white transition duration-100 cursor-pointer
    phone:w-[100px] phone:mr-1 phone:p-2 phone:border-0 phone:flex phone:justify-center phone:items-center phone:font-semibold phone:text-[#373C3D] phone:rounded-3xl phone:text-[0.9rem]
  `
}

const Title = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Приобретите LANDS для дальнейшей работы</h1>
        <div className={styles.whereBuyContainer}>
          {whereBuyList?.map((cex) => (
            <a key={cex.id} href={cex.link} className={styles.whereBuyContent} target='_blank' rel="noreferrer">{cex.description}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Title