import { cn } from '@/utils'
import { useCallback } from 'react'
import { Text } from '../Text'

interface ToggleProps {
  id?: string
  className?: string
  checked?: boolean
  disabled?: boolean
  label?: string
  onToggle?: (checked: boolean) => void
}

function Toggle({ id, className, label, checked, disabled, onToggle = () => {} }: ToggleProps) {
  const wrapperClassNames = cn(['inline-flex items-center gap-4 cursor-pointer'], className)

  const handleToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onToggle(event.target.checked)
    },
    [onToggle]
  )

  return (
    <label className={wrapperClassNames}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        id={id}
        className="sr-only peer"
        disabled={disabled}
      />
      <div className="relative w-11 h-6 bg-surface-lo peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-background after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-background after:border-background after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
      {label && (
        <Text as="span" variant="P3" className="text-inheret">
          {label}
        </Text>
      )}
    </label>
  )
}

export { Toggle }
