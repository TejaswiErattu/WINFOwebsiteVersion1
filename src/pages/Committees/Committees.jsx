import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import SubTabs from '../../components/SubTabs/SubTabs';
import { TEAM_TABS } from '../../data/navLinks';
import { officersData } from '../../data/officersData';
import { MEMBERSHIP_SIGNUP_URL } from '../../data/externalLinks';

/* Committee card with image + title + description (edit in data/officersData.js) */
function CommitteeCard({ committee }) {
  const { name, image, description } = committee;

  return (
    <div className="committee-card">
      <div className="committee-card__image">
        <img
          src={image || '/images/comingsoon.jpg'}
          alt={image ? `${name} committee` : `${name} committee photo coming soon`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="committee-card__name cursive-title">{name}</h3>
      <p className="committee-card__desc">{description}</p>
    </div>
  );
}

export default function Committees() {
  const { committeesTitle, committeesIntro, committees } = officersData;

  return (
    <SectionWrapper className="committees-section">
      <div className="committees-page__header">
        <h1 className="cursive-title page-title">{committeesTitle}</h1>
        <p className="team-hero__text">{committeesIntro}</p>
        <SubTabs tabs={TEAM_TABS} label="Our Team sections" />
      </div>

      <div className="committees-grid">
        {committees.map((c) => (
          <CommitteeCard key={c.name} committee={c} />
        ))}
      </div>

      <div className="team-committees-teaser">
        <p>Want to join a committee? Become a WINFO member to get started.</p>
        <Button href={MEMBERSHIP_SIGNUP_URL} variant="accent">become a member</Button>
      </div>
    </SectionWrapper>
  );
}
