import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__circuit" aria-hidden="true">
        <CircuitSVG variant="vertical" />
      </div>
      <SectionWrapper narrow>
        <div className="notfound__inner">
          <p className="notfound__code" aria-hidden="true">404</p>
          <h1 className="cursive-title page-title">page not found</h1>
          <p className="notfound__text">
            We couldn&rsquo;t find the page you were looking for. It may have moved, or the link may be mistyped.
          </p>
          <Button to="/" variant="primary" size="lg">
            back to home
          </Button>
        </div>
      </SectionWrapper>
    </section>
  );
}
