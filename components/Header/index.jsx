import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderStyled, Logo, HeaderContainer, Nav, LinkStyled, Line } from './styles';

const Header = ({ links }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link href="/">
          <Logo>XENIA DULISHKEVICH</Logo>
        </Link>
        <Nav>
          {links.map(link => (
            <Link href={link.path} key={link.id}>
              <LinkStyled>
                {link.title}
                <Line
                  transition={{ duration: 0.7 }}
                  initial={{ width: 0 }}
                  animate={{
                    width: currentPath === link.path ? '100%' : '0'
                  }} />
              </LinkStyled>
            </Link>
          ))}
        </Nav>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
