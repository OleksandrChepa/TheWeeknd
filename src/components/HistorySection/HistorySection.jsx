import React from 'react';
import styles from './HistorySection.module.css';

const HistorySection = () => {
  const text = `
    The Weeknd: From Dreams to Global Success
    ~ Early Years
    Abel Tesfaye, known as The Weeknd, was born on February 16, 1990, in Toronto, Canada. Influenced by icons like Michael Jackson and Prince, he developed a unique blend of R&B, pop, and electronic music.
    
    ~ Breakthrough (2010-2011)
    In 2010, he adopted the name The Weeknd and gained attention by releasing tracks on YouTube. His 2011 mixtapes—House of Balloons, Thursday, and Echoes of Silence—solidified his reputation.
    
    ~ Contemporary Influence
    In 2020, he released After Hours, with chart-topping hits like "Blinding Lights." The Weeknd is known for his innovative sound and significant cultural impact. He has pushed the boundaries of contemporary R&B and pop, blending different genres to create a unique sound that resonates with fans globally.

    ~ Social Activism
    Beyond music, The Weeknd is involved in social initiatives, addressing racial inequality and contributing to various charities. He has donated millions to causes such as disaster relief, mental health services, and support for marginalized communities.

    ~ Awards and Achievements
    The Weeknd has received numerous awards, including several Grammy Awards, American Music Awards, and Billboard Music Awards. His music has topped charts worldwide, and he is considered one of the leading artists of his generation.

    ~ Personal Life
    Abel Tesfaye has kept much of his personal life private, though he has been linked to several high-profile relationships. His artistry often reflects his experiences and emotions, making his music deeply personal and relatable.

    ~ Musical Style
    The Weeknd's music is characterized by its dark themes, atmospheric production, and emotive vocals. He often explores themes of love, heartbreak, and personal struggles in his songs.

    ~ Collaborations
    He has collaborated with a variety of artists across genres, including Drake, Ariana Grande, and Daft Punk. These collaborations have further expanded his reach and influence in the music industry.

    ~ Cultural Impact
    The Weeknd's influence extends beyond music; his distinct style, including his signature hairstyle and aesthetic, has made him a cultural icon. He has inspired countless artists and has a significant following on social media platforms.

    ~ Upcoming Projects
    The Weeknd has hinted at new music and projects in the pipeline, keeping fans excited about what’s next. His ability to reinvent himself and adapt to changing musical landscapes is a testament to his talent and creativity.
  `;

  return (
    <div className={styles.historyContainer}>
      <div className={styles.historyText}>
        {text.split('\n').map((line, index) => (
          <p key={index} className={line.includes('The Weeknd') ? styles.highlight : ''}>
            {line.trim()}
          </p>
        ))}
      </div>
      <img src="/image/HistoryFoto.jpg" alt="The Weeknd" className={styles.historyImage} />
    </div>
  );
};

export default HistorySection;
