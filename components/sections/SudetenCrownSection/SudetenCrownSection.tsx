import { Section } from '../Section';
import { sudetenRanges } from './data';
import { MountainCardsView } from './MountainCardsView';

export const SudetenCrownSection = () => {
  return (
    <Section className="bg-forest-50 py-20" ariaLabel="Sekcja wykaz szczytów">
      <div className="fluid-container">
        <MountainCardsView ranges={sudetenRanges} />
      </div>
    </Section>
  );
};
