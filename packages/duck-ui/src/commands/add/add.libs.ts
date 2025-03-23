import path from 'node:path'
import prompts from 'prompts'
import { get_registry_index, get_registry_item } from '~/utils/get-registry'
import { spinner as Spinner } from '~/utils/spinner'
import { addOptions, add_options_schema } from './add.dto'

export async function add_command_action(opt: addOptions) {
  const spinner = Spinner('initializing...').start()
  const options = add_options_schema.parse(opt)

  const registry = await get_registry_index()
  const filtered_registry = registry?.filter(
    (item) => item.type === 'registry:ui',
  )
  const prompt: { component: string[] } = await prompts([
    {
      type: 'multiselect',
      name: 'component',
      message: 'Select component to install',
      choices: filtered_registry!.map((item) => ({
        title: item.name,
        value: item.name,
      })),
    },
  ])
  spinner.start()

  const components = await Promise.all(
    prompt.component?.map(async (item) => {
      return await get_registry_item(item as Lowercase<string>)
    }),
  )

  spinner.succeed('🧑 Done.!, enjoy mr duck!🦆')
  process.exit(0)
}
