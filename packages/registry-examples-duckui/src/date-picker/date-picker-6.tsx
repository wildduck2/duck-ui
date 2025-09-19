'use client'

import { cn } from '@gentleduck/libs/cn'
import { Button } from '@gentleduck/registry-ui-duckui/button'
import { Calendar } from '@gentleduck/registry-ui-duckui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@gentleduck/registry-ui-duckui/popover'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@gentleduck/registry-ui-duckui/react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const FormSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
})

export default function CalendarDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover placement="bottom-start">
                <FormControl>
                  <PopoverTrigger asChild>
                    <Button
                      className={cn(
                        'w-[240px] px-2 text-left font-normal [&_svg]:w-4',
                        !field.value && 'text-muted-foreground',
                      )}
                      variant={'outline'}>
                      {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto opacity-50" />
                    </Button>
                  </PopoverTrigger>
                </FormControl>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    captionLayout="dropdown"
                    disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                    mode="single"
                    onSelect={field.onChange}
                    selected={field.value}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
