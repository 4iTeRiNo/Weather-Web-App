import {BundleCurve} from 'react-svg-curve';
import styles from './GraphLine.module.css';

export const GraphLine = () => {
  return (
    <div className={styles.axis}>
      <svg
        className={styles.graphLine}
        xmlns='http://www.w3.org/2000/svg'
      >
        <BundleCurve
          data={[
            [25, 120],
            [70, 150],
            [120, 120],
            [210, 90],
            [260, 120],
            [380, 160],
            [490, 90],
            [540, 100],
            [550, 100],
          ]}
          showPoints={false}
          stroke='#f9822f'
          strokeWidth={3}
        />
      </svg>
    </div>
  );
};
