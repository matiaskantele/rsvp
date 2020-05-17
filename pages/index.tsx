import { useTranslation } from 'react-i18next';

import { InviteContainer } from '../components/styles/InviteStyles';
import { BackgroundImage } from '../components/styles/BackgroundImageStyles';
import Countdown from '../components/Countdown';

const Invite: React.FC = () => {
  const { t } = useTranslation();

  return (
    <InviteContainer>
      <h1>
        {t('bride')}
        <div> & </div>
        {t('groom')}
      </h1>
      <h2>{t('gettingMarried')}</h2>
      <p>{t('timeAndDate')}</p>
      <Countdown />
      <BackgroundImage />
    </InviteContainer>
  );
};

export default Invite;
