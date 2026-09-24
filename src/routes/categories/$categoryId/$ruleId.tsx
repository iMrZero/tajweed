import { createFileRoute } from '@tanstack/react-router'
import { newData } from '@/util/data'
import { RuleDetail } from '@/components/RuleDetail'

export const Route = createFileRoute('/categories/$categoryId/$ruleId')({
  component: RuleDetailPage,
})

function RuleDetailPage() {
  const { categoryId, ruleId } = Route.useParams()

  // Find exact targeted category and rule data nodes
  const category = newData.find(c => c.category_id === Number(categoryId))
  const rule = category?.rules.find(r => r.id === Number(ruleId))

  if (!rule) return <div>لم يتم العثور على تفاصيل الحكم.</div>

  return <RuleDetail rule={rule} />
}
