import { Button } from '@gentleduck/registry-ui-duckui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@gentleduck/registry-ui-duckui/dialog'
import { Input } from '@gentleduck/registry-ui-duckui/input'
import { Label } from '@gentleduck/registry-ui-duckui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@gentleduck/registry-ui-duckui/select'
import { useAtomValue, useSetAtom } from '@gentleduck/state/primitive'
import { Plus, ToggleLeft } from 'lucide-react'
import React from 'react'
import { duck_table } from './main'
import {
  DuckTable,
  DuckTablePagination,
  DuckTableRowPerPage,
  DuckTableSelectedRows,
  DuckTableShape,
} from './table-advanced'
import {
  DuckTableBar,
  DuckTableColumnView,
  DuckTableLeftSide,
  DuckTableRightSide,
  DuckTableSearch,
} from './table-advanced.chunks'
export function TableDemo() {
  // return
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <DuckTable className="w-[765px] flex flex-col gap-2.5 border rounded-md p-4 overflow-x-hidden">
        <DuckTableBar>
          <DuckTableRightSide>
            <DuckTableSearch />
          </DuckTableRightSide>

          <DuckTableLeftSide>
            <DuckTableColumnView />
            <DuckTableAdd />
          </DuckTableLeftSide>
        </DuckTableBar>
        <DuckTableShape />

        <DuckTableBar>
          <DuckTableRightSide>
            <DuckTableSelectedRows />
          </DuckTableRightSide>

          <DuckTableLeftSide className="gap-8">
            <DuckTableRowPerPage />
            <DuckTablePagination />
          </DuckTableLeftSide>
        </DuckTableBar>
      </DuckTable>
    </div>
  )
}

export function DuckTableAdd() {
  const [open, setOpen] = React.useState(false)
  const columns = useAtomValue(duck_table.atoms.columns)
  const setRows = useSetAtom(duck_table.atoms.mutatedRows)
  const [state, setState] = React.useState<Record<string, string>>({
    ...Object.keys(columns).reduce((prev, key) => ({ ...prev, [key]: '' }), {}),
  })

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setRows((prev) => {
            return [
              ...prev,
              {
                id: crypto.randomUUID(),
                ...state,
              },
            ] as never
          })
          setOpen(false)
        }}>
        <DialogTrigger asChild size={'sm'} variant={'outline'}>
          <Button icon={<Plus />}>Add</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Row</DialogTitle>
            <DialogDescription>Fill out the form below to add a new row.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 grid-cols-2">
            {Object.entries(columns).map(([key, value]) =>
              value.enum?.length ? (
                <div className="grid gap-3" key={key}>
                  <Label htmlFor={key}>{key}</Label>
                  <Select
                    id={key}
                    onValueChange={(e) => setState((prev) => ({ ...prev, [key]: e }))}
                    value={state[key]}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a value" />
                    </SelectTrigger>
                    <SelectContent className="z-50 w-[179.7px]">
                      {value.enum.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="grid gap-3" key={key}>
                  <Label htmlFor={key}>{key}</Label>
                  <Input
                    id={key}
                    name={key}
                    onChange={(e) => setState((prev) => ({ ...prev, [key]: e.target.value }))}
                    placeholder={`Enter ${key}...`}
                    value={state[key]}
                  />
                </div>
              ),
            )}
          </div>
          <DialogFooter className="[&_button]:w-[120px]">
            <DialogClose variant={'outline'}>Cancel</DialogClose>
            <Button type="submit">Add Row</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
