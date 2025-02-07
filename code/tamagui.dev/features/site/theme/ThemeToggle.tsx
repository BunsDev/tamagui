import { Monitor, Moon, Sun } from '@tamagui/lucide-icons'
import type { ButtonProps } from 'tamagui'
import { Button, TooltipSimple } from 'tamagui'
import { useUserTheme } from './useUserTheme'

const icons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
}

export const ThemeToggle = (props: ButtonProps) => {
  const [{ resolvedTheme, userTheme }, setUserTheme] = useUserTheme()

  const Icon = icons[userTheme]

  return (
    <TooltipSimple groupId="header-actions-theme" label={`${resolvedTheme} mode`}>
      <Button
        size="$3"
        onPress={() => {
          if (userTheme === 'dark') {
            setUserTheme('system')
          } else if (userTheme === 'light') {
            setUserTheme('dark')
          } else {
            setUserTheme('light')
          }
        }}
        {...props}
        aria-label="Toggle light/dark color scheme"
        icon={Icon}
        hoverStyle={{
          bg: 'rgba(0,0,0,0.15)',
        }}
      />
    </TooltipSimple>
  )
}
