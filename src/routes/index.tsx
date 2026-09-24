import { createFileRoute } from '@tanstack/react-router'
import LeftSide from '@/components/layout/LeftSide'

export const Route = createFileRoute('/')({
  component: LeftSide,
})
