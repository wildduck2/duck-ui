import {
  Dialog,
  DialogClose,
  DialogCloseProps,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import { UseDuckAlertReturnType } from '../alert-dialog/alert-dialog.types'
import { DialogFooter, DialogHeader } from './dialog'

export interface DialogResponsiveProps extends React.ComponentPropsWithoutRef<typeof Dialog> {}
export interface DialogTriggerResponsiveProps extends React.ComponentPropsWithoutRef<typeof DialogTrigger> {}
export interface DialogContentResponsiveProps extends React.ComponentPropsWithoutRef<typeof DialogContent> {}
export interface DialogHeaderResponsiveProps extends React.ComponentPropsWithoutRef<typeof DialogHeader> {}
export interface DialogFooterResponsiveProps extends React.ComponentPropsWithoutRef<typeof DialogFooter> {}
export interface DialogTitleResponsiveProps extends React.ComponentPropsWithoutRef<typeof DialogTitle> {}
export interface DialogDescriptionResponsiveProps extends React.ComponentPropsWithoutRef<typeof DialogDescription> {}
export interface DialogCloseResponsiveProps extends React.ComponentPropsWithoutRef<typeof DialogClose> {}

/**
 * DialogWrapper Props
 */
export type DialogWrapperProps = {
  trigger?: DialogTriggerResponsiveProps
  content: DialogContentResponsiveProps & {
    _header?: DialogHeaderResponsiveProps & {
      _title?: DialogTitleResponsiveProps
      _description?: DialogDescriptionResponsiveProps
    }
    _footer?: DialogFooterResponsiveProps & {
      _cancel?: DialogCloseProps
      _submit?: React.HTMLProps<HTMLDivElement>
    }
  }
  duckHook?: UseDuckAlertReturnType
}
