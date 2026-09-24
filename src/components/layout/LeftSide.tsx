import { Link } from '@tanstack/react-router';
import styles from '@/styles/main.module.css'
import Input from '../ui/Input';
import { useMemo, useState } from 'react';
import { newData } from '@/util/data';

function normalize(value: string ) {
  return value.trim()
  .toLowerCase()
  .replace(/[\u064B-\u065F\u0670]/g, '')
  .replace(/\u0640/g, '')
}

function LeftSide() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const searchTerm = normalize(query)
    if(!searchTerm) return []
    return newData.flatMap(category =>
      category.rules.filter(rule => {
        const searchableText = normalize(`${rule.title} ${rule.definition} ${rule.example.join(' ')}`)
        return searchableText.includes(searchTerm)
      }).map(rule => ({...rule,categoryId: category.category_id}))
    )
  },[query])
    return (
    <main className={styles.main}>
      <h1>التجويد</h1>
      <p>
        مرحبًا بك في دليل أحكام التجويد. اختر قسمًا من القائمة الجانبية لعرض
        التفاصيل.
      </p>
      <div className={styles.search}>
        <Input value={query} onChange={setQuery}/>
      </div>
      {query && (
        <div className={styles.results}>
          {results.length === 0 ? (
            <p>لا توجد نتائج.</p>
          ) : (
            <ul>
              {results.map(rule => (
                <li key={`${rule.categoryId}-${rule.id}`}>
                  <Link
                    to="/categories/$categoryId/$ruleId"
                    params={{
                      categoryId: String(rule.categoryId),
                      ruleId: String(rule.id),
                    }}
                  >
                    {rule.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {!query && <Link to="/categories">الذهاب إلى الأقسام</Link>}
    </main>
  );
}
export default LeftSide;

