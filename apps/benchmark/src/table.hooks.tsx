import { atom, Setter } from '@gentleduck/state/primitive'
import { DuckTable } from './table.libs'
import { DuckTableColumnSort, DuckTableOptions } from './table.types'

export function createDuckTable<THeaders extends Lowercase<string>[]>(initialData: DuckTableOptions<THeaders>) {
  const table = new DuckTable<THeaders>(initialData)

  // Data atoms
  const rows = atom(table.getRows())

  const mutatedRows = atom(
    () => table.getMutatedRows(),
    (_, set, newRows: (value: DuckTableOptions<THeaders>['rows']) => DuckTableOptions<THeaders>['rows']) => {
      table.setMutatedRows(newRows(table.getMutatedRows()))
      set(totalPages, table.getTotalPages())
      set(currentPageRows, table.getCurrentPageRows())
      set(rows, table.getRows())
    },
  )

  const columns = atom(table.getColumns())
  const visibleColumns = atom(
    () => table.getVisibleColumns(),
    (_, set, column: DuckTableOptions<THeaders>['columns'][keyof DuckTableOptions<THeaders>['columns']]['label']) => {
      table.toggleColumnVisibility(column)
      set(columns, () => table.getColumns())
      syncAll(set)
    },
  )
  const currentPageRows = atom(table.getCurrentPageRows())
  const totalPages = atom(table.getTotalPages())
  const selectedRows = atom(
    () => table.getSelectedRows(),
    (_, set, newIds: ((value: string[]) => string[]) | string[]) => {
      if (typeof newIds === 'function') {
        table.setSelectedRows(newIds(table.getSelectedRows()))
      } else {
        table.setSelectedRows(newIds)
      }
      set(mutatedRows, () => table.getMutatedRows())
      set(currentPageRows, table.getCurrentPageRows())
      set(totalPages, table.getTotalPages())
    },
  )

  // Derived setter atoms with full sync
  const query = atom(
    () => table.getQuery(),
    (_, set, newQuery: string) => {
      table.setQuery(newQuery)
      set(currentPage, () => table.getCurrentPage())
      syncAll(set)
    },
  )

  const pageSize = atom(
    () => table.getPageSize(),
    (_, set, newSize: number) => {
      table.setPageSize(newSize)
      syncAll(set)
    },
  )

  const currentPage = atom(
    () => table.getCurrentPage(),
    (_, set, newPage: ((value: number) => number) | number) => {
      const page = typeof newPage === 'function' ? newPage(table.getCurrentPage()) : newPage
      table.setCurrentPage(page)
      syncAll(set)
    },
  )

  const columnSort = atom(
    () => table.getColumnSort(),
    (_, set, newColumnSort: DuckTableColumnSort[] | ((value: DuckTableColumnSort[]) => DuckTableColumnSort[])) => {
      const sort = typeof newColumnSort === 'function' ? newColumnSort(table.getColumnSort()) : newColumnSort
      table.setColumnSort(sort)
      syncAll(set)
    },
  )

  // Central sync function
  function syncAll(set: Setter) {
    set(mutatedRows, () => table.getMutatedRows())
    set(currentPageRows, table.getCurrentPageRows())
    set(totalPages, table.getTotalPages())
    set(selectedRows, table.getSelectedRows())
  }

  return {
    atoms: {
      columnSort,
      columns,
      currentPage,
      currentPageRows,
      mutatedRows,
      pageSize,
      query,
      rows,
      selectedRows,
      totalPages,
      visibleColumns,
    },
    table,
  }
}
