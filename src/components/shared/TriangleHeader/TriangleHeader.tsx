import styles from './TriangleHeader.module.scss';

const TriangleHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className={styles.Shadow}>
      <div className={styles.TriangleHeader}>
        <p>{title}</p>
        <div className={styles.HeaderDivider} />
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};

export default TriangleHeader;
