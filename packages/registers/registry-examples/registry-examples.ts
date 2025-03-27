import { Registry } from '../registry-schema'

export const registry_examples: Registry = [
  {
    name: 'button-examples',
    type: 'registry:example',
    registryDependencies: ['button'],
    root_folder: 'button',
    files: [],
  },
  {
    name: 'badge-examples',
    type: 'registry:example',
    registryDependencies: ['badge'],
    root_folder: 'badge',
    files: [],
  },
  {
    name: 'tooltip-examples',
    type: 'registry:example',
    registryDependencies: ['tooltip', 'button'],
    root_folder: 'tooltip',
    files: [],
  },
  {
    name: 'accordion-examples',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    root_folder: 'accordion',
    files: [],
  },
  {
    name: 'toggle-examples',
    type: 'registry:example',
    registryDependencies: ['toggle'],
    root_folder: 'toggle',
    files: [],
  },
  {
    name: 'toggle-group-examples',
    type: 'registry:example',
    registryDependencies: ['toggle-group'],
    root_folder: 'toggle-group',
    files: [],
  },
  {
    name: 'sonner-examples',
    type: 'registry:example',
    registryDependencies: ['sonner'],
    root_folder: 'sonner',
    files: [],
  },
  {
    name: 'tabs-examples',
    type: 'registry:example',
    registryDependencies: ['tabs'],
    root_folder: 'tabs',
    files: [],
  },
  {
    name: 'textarea-examples',
    type: 'registry:example',
    registryDependencies: ['textarea'],
    root_folder: 'textarea',
    files: [],
  },
  // {
  //   name: 'table-examples',
  //   type: 'registry:example',
  //   registryDependencies: ['table'],
  //   root_folder: 'table',
  //   files: [],
  // },
  // {
  //   name: 'upload-examples',
  //   type: 'registry:example',
  //   registryDependencies: ['upload'],
  //   root_folder: 'upload',
  //   files: [],
  // },
  // {
  //   name: 'alert-dialog-examples',
  //   type: 'registry:example',
  //   registryDependencies: ['alert-dialog', 'button'],
  //   root_folder: 'alert-dialog',
  //   files: [],
  // },
  {
    name: 'drawer-examples',
    type: 'registry:example',
    registryDependencies: ['drawer'],
    root_folder: 'drawer',
    files: [],
  },
]
