import { useEffect } from 'react';
import { actions, selectors } from '@store/template';
import { IPageAttributes } from '@schemas/schemas_d';
import { useDispatch, useSelector } from 'react-redux';
import Page from '~/components/routes/Page/Page';
import Sider from '~/components/shared/Sider/Sider';
import styles from './EmailPage.module.scss';

const EmailPage: React.FC<IPageAttributes> = (props) => {
  const dispatch = useDispatch();
  const templatesNameList = useSelector(selectors.getTemplates);

  useEffect(() => {
    dispatch(actions.doloadTemplates());
  }, []);

  return (
    <Page {...props}>
      <div className={styles.EmailPage}>
        <Sider title="Templates">
          <div>
            {templatesNameList?.length > 0 &&
              templatesNameList.map((t) => (
                <div key={t.id} className={styles.TemplateInfo}>
                  {t.filename}
                </div>
              ))}
          </div>
        </Sider>
        <div className={styles.Content}> CONTENT</div>
      </div>
    </Page>
  );
};

export default EmailPage;
