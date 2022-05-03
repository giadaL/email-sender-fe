import i18n from '@i18n';
import styles from './Sider.module.scss';

const Sider: React.FC<{ title: string; children }> = ({ title, children }) => {
  return (
    <div className={styles.Sider}>
      <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>{title}</h3>
      <div className={styles.Children}>
        <div className={styles.List}>{children}</div>
        <button className={styles.SiderButton} type="button" onClick={() => console.log('clicked')}>
          {i18n.SIDER_BUTTON}
        </button>
      </div>
    </div>
  );
};

export default Sider;
