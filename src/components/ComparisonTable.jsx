import { Reveal } from './Reveal'
import { COMPARISON_COLUMNS, COMPARISON_ROWS } from '../data/content'

export function ComparisonTable() {
  return (
    <section id="comparison" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          COMPARISON
        </Reveal>
        <Reveal as="h2" className="section-title">
          他の学習方法との違い
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          一般的な集団授業型予備校については、校舎やコースにより対応が異なるため、断定を避けた表現にしています。
        </Reveal>
        <Reveal delay={0.15} className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">比較項目</th>
                {COMPARISON_COLUMNS.map((col) => (
                  <th scope="col" key={col} className={col === 'MEDTHOD SCHOOL' ? 'is-us' : ''}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={i} className={COMPARISON_COLUMNS[i] === 'MEDTHOD SCHOOL' ? 'is-us' : ''}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
