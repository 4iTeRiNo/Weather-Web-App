import styles from './Avatar.module.css';
import cn from 'classnames';
import {AvatarICon} from '../SGVIcons';

// interface AvatarProps { }

export const Avatar = () => {
  const size = 50;
  const sizeInner = `${size - 8}px`;
  const sizeBox = `${size - 4}px`;
  // const sizeTitle = `${size / 2}px`;
  const sizeWrapper = `${size}px`;

  return (
    <button className={styles.avatar}>
      <div
        className={cn(styles.avatarInner)}
        style={{width: sizeInner, height: sizeInner}}
      >
        <div
          className={cn(styles.avatarInner)}
          style={{width: sizeInner, height: sizeInner}}
        >
          <AvatarICon
            className={styles.avatarFace}
            width={sizeInner}
            height={sizeInner}
          />
          <div
            className={styles.avatarBorder}
            style={{width: sizeWrapper, height: sizeWrapper}}
          >
            <div
              className='AvatarBorderBox'
              style={{width: sizeBox, height: sizeBox}}
            />
          </div>
        </div>
      </div>
    </button>
  );
};
