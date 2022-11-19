import React from "react";

const styles = {
  subTitle: `text-[1.5rem] font-semibold`,
  text: `w-3/5 text-[0.875rem] mt-5`,
  author: `text-[0.75rem] text-[#5A6170] mt-5`,
  mainImage: `
    rounded-xl bg-cover mb-5
    phone:w-[300px] phone:h-[200px]
    tablet:w-max tablet:h-max
  `,
  subImage: `rounded-xl bg-cover`
}

const LastNewsComponent = ({ news }) => {
  return (
    <div key={news.id} className="container">
      <div className="Main">
        <img className={styles.mainImage} src={news.image} alt="default" />
        <h2 className={styles.subTitle}>{news.title}</h2>
        <p className={styles.text}>{news.description}</p>
        <p className={styles.author}>{news.author}</p>
      </div>
      <div className="submain-1 flex flex-row justify-between">
        <img
          className={styles.subImage}
          width={120}
          height={115}
          src={news.image}
          alt="default"
        />
        <div className="mx-5">
          <h2 className={styles.subTitle}>{news.title}</h2>
          <p className={styles.author}>{news.author}</p>
        </div>
      </div>
      <div className="submain-2 flex flex-row justify-between">
        <img
          className={styles.subImage}
          width={120}
          height={115}
          src={news.image}
          alt="default"
        />
        <div className="mx-5">
          <h2 className={styles.subTitle}>{news.title}</h2>
          <p className={styles.author}>{news.author}</p>
        </div>
      </div>
      <div className="submain-3 flex flex-row justify-between">
        <img
          className={styles.subImage}
          width={120}
          height={115}
          src={news.image}
          alt="default"
        />
        <div className="mx-5">
          <h2 className={styles.subTitle}>{news.title}</h2>
          <p className={styles.author}>{news.author}</p>
        </div>
      </div>
    </div>
  );
};

export default LastNewsComponent;
