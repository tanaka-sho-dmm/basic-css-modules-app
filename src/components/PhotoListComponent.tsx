import React from "react";
import styles from "./PhotoListComponent.module.scss";

const PhotoListComponent = ({ text, photoList }:any) => {
  return (
    <div className={`${styles.container} ${styles.size1} ${styles.size2}`}>
    <div  className={`${styles.extendBase1and2}`} >diamond problem</div>
    <div  className={`${styles.extendBase1}`} >extend1</div>
    <div  className={`${styles.extendBase2}`} >extend2</div>
    <div  className={`${styles.base}`} >base</div>
      <h1 className={styles.text}>PhotoListComponent from CSS Modules.</h1>
      <p>text: {text}</p>
      <ul className={styles.imageList}>
        {photoList.map((photo:any) => (
          <li className={styles.imageListItem} key={photo.id}>
            <img
              className={styles.image}
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoListComponent;