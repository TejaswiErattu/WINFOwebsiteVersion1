import { BoardCard } from '../../components/Card/Card';
import { boardMembers } from '../../data/siteData';
import './Board.css';

/**
 * Board page — leadership team member cards.
 */
export default function Board() {
  return (
    <main className="boardPage">
      {/* Header */}
      <section className="boardHero" aria-labelledby="board-heading">
        <h1 id="board-heading">Our Board</h1>
        <p>Meet the passionate students who lead WINFO and make everything happen.</p>
      </section>

      {/* Board Grid */}
      <section className="section" aria-label="Board members">
        <div className="container">
          <div className="boardGrid">
            {boardMembers.map((member) => (
              <BoardCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
