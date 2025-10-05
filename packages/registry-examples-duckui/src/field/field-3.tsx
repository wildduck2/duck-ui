import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@gentleduck/registry-ui-duckui/field'
import { Textarea } from '@gentleduck/registry-ui-duckui/textarea'

export default function FieldTextarea() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea id="feedback" placeholder="Your feedback helps us improve..." rows={4} />
            <FieldDescription>Share your thoughts about our service.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
