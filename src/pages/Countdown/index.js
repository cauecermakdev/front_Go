import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Timer from './Timer';
import Page from '../../components/Page';

import useIsDateAfter from '../../hooks/useIsDateAfter';

import EventInfoContext from '../../contexts/EventInfoContext';

export default function Countdown() {
  const { eventInfo, loadingEventInfo } = useContext(EventInfoContext);
  const navigate = useNavigate(); //hook to go another page in a function
  // const countdownOver = useIsDateAfter(eventInfo?.startsAt);
  const countdownOver = 0;

  useEffect(() => {
    if (countdownOver) {
      navigate('/enroll');
    }
  }, [countdownOver]);

  function onZero() {
    navigate('/enroll');
  }

  if (loadingEventInfo) {
    return 'Loading...';
  }

  return (
    <Page background={eventInfo?.backgroundImageUrl}>
      <div>Faltam</div>
      <Timer time={eventInfo?.startsAt} onZero={onZero} />
      <div>Para as inscrições</div>
    </Page>
  );
}