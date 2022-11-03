import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ICON_Back from '../ICON_Back';

const HeaderBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const navigate = useNavigate();
  const onClick = () => navigate(-1);
  return (
    <HeaderBarWrapper>
      {!isHome && (
        <button onClick={onClick}>
          <ICON_Back />
        </button>
      )}
      <h1>{isHome ? '전체차량' : '차량상세'}</h1>
    </HeaderBarWrapper>
  );
};

const HeaderBarWrapper = styled.header`
  display: flex;
  height: 60px;
  position: relative;
  align-items: center;
  border-bottom: 1px solid var(--color-black);

  button {
    width: 24px;
    height: 24px;
    text-align: center;
    position: absolute;
    left: 20px;
    top: 18px;
    border: 0;
    background-color: transparent;
  }

  h1 {
    flex: 1;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: var(--color-black);
  }
`;
export default HeaderBar;
