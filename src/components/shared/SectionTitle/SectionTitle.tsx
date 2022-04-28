import styles from './SectionTitle.module.scss';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.SectionTitle}>
      <h2>{title}</h2>
      <div className={styles.SubTitleDivider} />
    </div>
  );
};

export default SectionTitle;
