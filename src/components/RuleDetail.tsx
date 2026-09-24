import styles from '@/styles/categories.module.css'

export type Rule = {
  title: string
  definition: string
  example: string[]
  audio?: string
  youtube?: string
}

type RuleDetailProps = {
  rule: Rule
}

export function RuleDetail({ rule }: RuleDetailProps) {
  console.log(rule.youtube)
  return (
    <div className={styles.definition}>
      <h2>{rule.title}</h2>
      <p>
        <strong>التعريف:</strong> {rule.definition}
      </p>

      <div>
        <strong>أمثلة:</strong>
        <ul>
          {rule.example.map((ex, i) => <li key={i}>{ex}</li>)}
        </ul>
      </div>

      {rule.youtube && (
        <iframe
          width="600px"
          height="480px" 
          src={rule.youtube} 
          title={rule.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading='lazy'></iframe>
      )}
    </div>
  )
}