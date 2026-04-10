import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ImageCard from '../../components/ImageCard/ImageCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import { officersData } from '../../data/siteData';
import './Officers.css';

export default function Officers() {
  return (
    <>
      <SectionWrapper>
        <SectionHeading
          label="Leadership"
          title="Meet Our Officers"
          description="The talented team working behind the scenes to build an amazing community."
        />
        <div className="officers-grid">
          {officersData.map((officer) => (
            <ImageCard
              key={officer.name}
              image={officer.image || ''}
              title={officer.name}
              subtitle={officer.role}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <CTABanner
          title="Interested in leading?"
          text="Officer applications open every spring. Join the team and make an impact!"
          btnLabel="Learn More"
          btnTo="/membership"
        />
      </SectionWrapper>
    </>
  );
}
