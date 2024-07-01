import { HtmlProps } from '@/components/html/html';
import HeaderNavigationMobile from '@/components/header/navigation/mobile/mobile';
import HeaderNavigationDesktop from '@/components/header/navigation/desktop/desktop';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNavigationDesktop />
      <HeaderNavigationMobile />
    </HeaderContainer>
  );
}

function HeaderContainer({ children }: HtmlProps) {
  return (
    <div className="sticky left-0 right-0 top-0 z-30 bg-primary">
      {children}
    </div>
  );
}
