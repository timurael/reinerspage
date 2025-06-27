"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string
    onValueChange?: (value: string) => void
  }
>(({ className, value, onValueChange, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("grid gap-2", className)} {...props} />
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const group = React.useContext(RadioGroupContext)
  
  return (
    <input
      type="radio"
      ref={ref}
      className={cn(
        "h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      checked={group?.value === props.value}
      onChange={(e) => {
        if (e.target.checked && group?.onValueChange) {
          group.onValueChange(props.value as string)
        }
      }}
      {...props}
    />
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

const RadioGroupContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
} | null>(null)

const RadioGroupWithContext: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string
    onValueChange?: (value: string) => void
    children: React.ReactNode
  }
> = ({ value, onValueChange, children, ...props }) => {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <RadioGroup value={value} onValueChange={onValueChange} {...props}>
        {children}
      </RadioGroup>
    </RadioGroupContext.Provider>
  )
}

export { RadioGroupWithContext as RadioGroup, RadioGroupItem }