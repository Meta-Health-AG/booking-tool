import { Size12W400 } from '@/components/Typography.tsx';

function TimeZoneDisplay() {
  const timeZone = new Intl.DateTimeFormat('de-CH', {
    timeZone: 'Europe/Zurich',
    timeZoneName: 'short',
  })
    .formatToParts(new Date())
    .find((part) => part.type === 'timeZoneName')?.value;

  return <Size12W400>Zeitzone Zürich ({timeZone})</Size12W400>;
}

export default TimeZoneDisplay;
