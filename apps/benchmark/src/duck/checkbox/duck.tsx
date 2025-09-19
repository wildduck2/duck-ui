import { Checkbox } from '@gentleduck/registry-ui-duckui/checkbox'
import { Check } from 'lucide-react'

export default function CheckboxDemo() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Checkbox className="after:text-xs" id="terms" indicator={<Check />} />
        <Checkbox
          className="text-blue-900 checked:bg-blue-300 checked:border-blue-300"
          id="terms"
          indicator={<Check />}
        />
        <Checkbox className="text-blue-900 checked:bg-blue-300 checked:border-blue-300" id="terms" />
      </div>
    </div>
  )
}
