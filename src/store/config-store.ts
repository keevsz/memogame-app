import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Config {
  level: number
  theme: string
  musicConfig: {}
}

const INITIAL_VALUES: Config = {
  level: 0,
  theme: 'Dark',
  musicConfig: {},
}

interface ConfigStorage {
  config: Config
}

const useConfigStore = create<ConfigStorage>()(
  devtools(
    persist(
      (set) => ({
        config: INITIAL_VALUES,
      }),
      {
        name: 'config',
      }
    )
  )
)
export default useConfigStore
