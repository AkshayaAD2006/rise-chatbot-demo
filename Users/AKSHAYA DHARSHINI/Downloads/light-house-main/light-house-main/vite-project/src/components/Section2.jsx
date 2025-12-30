import React from 'react';
import { motion } from 'framer-motion';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="section2">
      <motion.div
        className="left"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img src="./images/section1.png" alt="Visual" />
      </motion.div>

      <motion.div
        className="right"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="typewriter">Charting New Territories</h2>
        <p className="section2-text">
          Ammu, Nee ippo kerala pora.Unna romba miss pannuva amma.<br>
          Nee illa ma na yeppadi irruka pora nu thrl.Nee pathu ponnum chellam.
          Na unna pathi tha full yoschitu irrupa ammu.Ana na romba strong irrupa. 
          Na vanthu strong apo mathri la feel panna mata.Nee illa ma na yaaru poi konjuva,sanda poduva,thittuva,azhuva,kohipa.
          Enna vittu thanniya poriya ammu.Nee sikirama vanthudu ma. 
          Na unaka wait pannuva.Nee pathu ponnum.
          Samathu kolanthaya irrukanum ma.
          Love you to the core💗.
          Love you so much ammu kutti💓.
          Love you so much da thanga pulla💖.
          Enna petha saami ma nee🤗 .Nee illa na illa💕.</br>
        </p>
      </motion.div>
    </div>
  );
};

export default Section2;
