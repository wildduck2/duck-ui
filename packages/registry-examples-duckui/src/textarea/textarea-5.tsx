import { Label } from '@gentelduck/registry-ui-duckui/label'
import { Textarea } from '@gentelduck/registry-ui-duckui/textarea'

export default function Textarea4Demo() {
  return (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message'>Your message</Label>
      <Textarea placeholder='Type your message here.' id='message' />
    </div>
  )
}
