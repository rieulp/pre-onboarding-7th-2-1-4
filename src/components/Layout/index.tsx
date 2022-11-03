import styled from 'styled-components';
import HeaderBar from '../HeaderBar';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <HeaderBar />
      <div className="content">{children}</div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  min-height: 100vh;
  .content {
    overflow-x: hidden;
  }
`;

export default Layout;
