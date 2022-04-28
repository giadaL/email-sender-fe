import Page from '~/components/routes/Page/Page';
import TriangleHeader from '~/components/shared/TriangleHeader/TriangleHeader';
import i18n from '~/i18n';
import { PageAttributes } from '~/schemas/compAttributes_d';
import pythonIcon from '~/resources/python_white.svg';
import fastApiIcon from '~/resources/fastapi_white.svg';
import postgresqlIcon from '~/resources/postgresql.svg';
import reactIcon from '~/resources/react_white.svg';
import reduxSagaIcon from '~/resources/redux-saga_white.svg';
import typescriptIcon from '~/resources/typescript_white.svg';
import dockerIcon from '~/resources/docker_white.svg';
import sassIcon from '~/resources/sass_white.png';
import gitIcon from '~/resources/git_white.svg';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

import styles from './HomePage.module.scss';
import SectionTitle from '~/components/shared/SectionTitle/SectionTitle';
import { useDispatch } from 'react-redux';
import { actions } from '@store/routing';
import { Routes } from '~/components/routes/urls';

const HomePage: React.FC<PageAttributes> = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.HomePage}>
      <Page {...props}>
        <TriangleHeader title={i18n.PROJECT} subtitle={i18n.AUTHOR} />
        <div className={styles.Content}>
          <div className={styles.ContentColumn} style={{ borderRight: '#faffff 1px solid' }}>
            <div className={styles.ImageContent}>
              <div className={styles.ImageRow}>
                <a href="https://www.python.org/" target="_blank" rel="noreferrer">
                  <div className={styles.Image}>
                    <img src={pythonIcon} alt="python logo" width="100%" />
                  </div>
                </a>
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                  <div className={styles.ImageHor}>
                    <img src={dockerIcon} alt="docker logo" height="100%" />
                  </div>
                </a>
                <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
                  <div className={styles.Image}>
                    <img src={fastApiIcon} alt="fast api logo" width="100%" />
                  </div>
                </a>
              </div>
              <div className={styles.ImageRow}>
                <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
                  <div className={styles.Image}>
                    <img src={postgresqlIcon} alt="postgresql logo" width="100%" />
                  </div>
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <div className={styles.ImageHor}>
                    <img src={gitIcon} alt="git logo" height="100%" />
                  </div>
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <div className={styles.Image}>
                    <img src={typescriptIcon} alt="typescript icon" width="100%" />
                  </div>
                </a>
              </div>
              <div className={styles.ImageRow}>
                <a href="https://it.reactjs.org/" target="_blank" rel="noreferrer">
                  <div className={styles.ImageHor}>
                    <img src={reactIcon} alt="react logo" height="100%" />
                  </div>
                </a>

                <a href="https://redux-saga.js.org/" target="_blank" rel="noreferrer">
                  <div className={styles.ImageHor}>
                    <img src={reduxSagaIcon} alt="Redux Saga logo" height="100%" />
                  </div>
                </a>

                <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                  <div className={styles.ImageHor}>
                    <img src={sassIcon} alt="sass icon" height="70%" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.ContentColumn} style={{ borderLeft: '#faffff 1px solid' }}>
            <div className={styles.RigthColumn}>
              <SectionTitle title={i18n.THE_PROJECT} />
              <div style={{ padding: '0 0 7vh 0' }}>
                <p>
                  {/* TODO */}
                  {i18n.PROJECT_DESCRIPTION}
                </p>
              </div>
              <div>
                <button
                  className={styles.ButtonStart}
                  onClick={() => dispatch(actions.linkTo(Routes.HOME))}
                >
                  {i18n.START_DEMO}
                </button>
              </div>
              <div className={styles.SocialIcons}>
                <a
                  href="https://www.linkedin.com/in/giada-legname/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinOutlined height="50px" />
                </a>
                <a href="https://github.com/giadaL" target="_blank" rel="noreferrer">
                  <GithubOutlined height="100%" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default HomePage;
