'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function LandingInfoTitle() {
  const t = useTranslations('Landing');
  const refContainer = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);

  return (
    <LandingInfoTitleContainer>
      <h1
        ref={refContainer}
        className="md:text-2xl text-end text-sm font-bold xs:text-md sm:text-xl"
      >
        {t('title')}
      </h1>
      <div>
        <div style={{ height: `${dimensions.height}px` }}></div>
        <h2 className="break-word text-xl font-bold">{t('date')}</h2>
      </div>
    </LandingInfoTitleContainer>
  );
}

function LandingInfoTitleContainer({ children }: { children: ReactNode }) {
  return <div className="flex items-start justify-center">{children}</div>;
}
