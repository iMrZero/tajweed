import styles from "@/styles/categories.module.css"
import { title } from "@/util/data"
function Categories() {
  return (
    <div className={styles.categories}>
      <h1>الرجاء اختيار أحد الأحكام من القائمة الجانبية لعرض التفاصيل</h1>
      <div className={styles.cards}>
        {title.map(t => <span>{t}</span>)}
      </div>
    </div>
  ) 
}
export default Categories