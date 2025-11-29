import { Section, SectionHeader } from '@/components/sections';
import { FadeIn } from '@/components/motion';
import { DocumentIcon } from '@/components/icons';
import { SubmissionForm } from './SubmissionForm';

export const SubmissionFormSection = () => {
  return (
    <Section
      id="zglos-przejscie"
      ariaLabel="Zgłoś Swoje Przejście"
      className="bg-forest-800"
    >
      <div className="fluid-container">
        <SectionHeader
          title="Zgłoś Swoje Przejście"
          icon={<DocumentIcon className="size-6 text-cream/80" />}
          variant="light"
        />
        <FadeIn
          direction="up"
          offset={30}
          duration={0.6}
          delay={0.6}
          inView={true}
          className="mb-16 text-center"
        >
          <p className="text-fluid-lg mx-auto max-w-4xl font-medium leading-relaxed text-cream/90">
            Ukończyłeś Sudety Grand Trail? Podziel się swoją historią i dołącz
            do oficjalnego Hall of Fame!
          </p>
        </FadeIn>

        <div className="mx-auto max-w-5xl">
          <SubmissionForm />
        </div>
      </div>

      {/* Decorative vintage elements */}
      <div className="absolute left-10 top-20 h-32 w-32 animate-pulse rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute bottom-20 right-10 h-24 w-24 animate-pulse rounded-full bg-cream/10 blur-xl" />
    </Section>
  );
};
