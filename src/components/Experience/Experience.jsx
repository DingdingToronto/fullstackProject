import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [skills, setSkills] = useState([]);
  const [history, setHistory] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch skills data
    fetch('https://backend-portfolio-dkgi.onrender.com/api/skills')
      .then(response => response.json())
      .then(data => {setSkills(data)})
      .catch(error => console.error('Error fetching skills:', error));

    // Fetch history data
    fetch('https://backend-portfolio-dkgi.onrender.com/api/histories') 
      .then(response => response.json())
      .then(data => setHistory(data))
      .catch(error => console.error('Error fetching history:', error));
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

