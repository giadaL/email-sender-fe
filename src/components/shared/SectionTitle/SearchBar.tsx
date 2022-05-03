import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  const [bgcolor, setBgcolor] = useState<string>('rgb(93, 155, 231)');
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className={styles.SearchBarDiv} tabIndex={-1} style={{ background: bgcolor }}>
      <input
        value={searchValue}
        className={styles.InputSearch}
        type="search"
        placeholder="search.."
        pattern="[A-Za-z]"
        onClick={() => {
          setBgcolor('rgb(18, 114, 231');
        }}
        onChange={(v) => {
          setSearchValue(v.target.value);
        }}
        onBlur={() => {
          setBgcolor('rgb(93, 155, 231)');
        }}
        onReset={() => console.log('reset')}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            searchValue && console.log('search');
          }
        }}
      />

      <i className={styles.SearchIcon} style={{ background: bgcolor, borderRadius: '20px' }}>
        <SearchOutlined
          height="1px"
          onClick={() => {
            console.log('search');
          }}
        />
      </i>
    </div>
  );
};

export default SearchBar;
