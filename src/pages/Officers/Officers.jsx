import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PageHero from '../../components/PageHero/PageHero';
import { OfficerCard, AccentCard, JoinCTACard } from '../../components/Cards';
import { officersData } from '../../data/officersData';
import './Officers.css';

export default function Officers() {
  const {
    title,
    tagline,
    heroDescription,
    groups,
    roleHighlights,
    rolesHeading,
    joinCta,
  } = officersData;

  return (
    <>
      {/* ───── Hero ───── */}
      <PageHero
        layout="center"
        badge={`👩‍💻 ${tagline}`}
        title={<span>{title}</span>}
        description={heroDescription}
        className="officers-hero"
      />

      {/* ───── Officer Groups ───── */}
      {groups.map((group, idx) => (
        <SectionWrapper key={group.label} bg={idx % 2 === 0 ? 'default' : 'alt'}>
          <span className="officers-group__label">{group.label}</span>

          <div
            className={`officers-group__grid${
              group.members.length <= 3 ? ' officers-group__grid--exec' : ''
            }`}
          >
            {group.members.map((m) => (
              <OfficerCard
                key={m.name}
                name={m.name}
                role={m.role}
                image={m.image}
                bio={m.bio}
              />
            ))}
          </div>
        </SectionWrapper>
      ))}

      {/* ───── Role Highlights ───── */}
      <SectionWrapper>
        <SectionHeading
          label={rolesHeading.label}
          title={rolesHeading.title}
          description={rolesHeading.description}
        />

        <div className="officers-roles">
          {roleHighlights.map((r) => (
            <AccentCard
              key={r.title}
              icon={r.icon}
              title={r.title}
              text={r.description}
              accent={r.accent}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ───── Join CTA ───── */}
      <SectionWrapper bg="alt">
        <JoinCTACard
          emoji={joinCta.emoji}
          title={joinCta.title}
          description={joinCta.description}
          btnLabel={joinCta.btnLabel}
          btnTo={joinCta.btnTo}
        />
      </SectionWrapper>
    </>
  );
}
