'use client'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@gentleduck/registry-ui-duckui/input-otp'
import React from 'react'

export default function InputOTPControlled() {
  const [value, setValue] = React.useState('')

  return (
    <div className="space-y-2">
      <InputOTP maxLength={6} onValueChange={(value) => setValue(value)} value={value}>
        <InputOTPGroup>
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
          <InputOTPSlot />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === '' ? 'Enter your one-time password.' : <>You entered: {value}</>}
      </div>
    </div>
  )
}
