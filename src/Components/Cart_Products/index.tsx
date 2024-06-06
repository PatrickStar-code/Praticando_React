import { Button } from 'keep-react'
import React from 'react'

export default function CartProducts() {
  return (
    <div className="flex items-start gap-3">
      <div>
        <div className="h-20 w-20 animate-pulse bg-metal-50"></div>
      </div>
      <div>
        <p>Men&apos;s casual shoe</p>
        <p>1 x 99 = $99</p>
        <Button
          color="secondary"
          size="xs"
          variant="outline"
          className="border-none p-0 hover:bg-white hover:text-error-500"
        >
          Remove
        </Button>
      </div>
    </div>
  )
}
