import { Button, Divider, Sidebar } from 'keep-react'

export default function Cart() {
  return (
    <Sidebar className="max-w-max h-screen flex flex-col justify-between">
      <Sidebar.Body className="space-y-3 p-4 "></Sidebar.Body>
      <Divider className="my-3" />
      <Sidebar.Footer>
        <div className="mb-2 flex items-center justify-between">
          <p>Total</p>
          <p>$297</p>
        </div>
        <Button className="w-full">Checkout Now</Button>
      </Sidebar.Footer>
    </Sidebar>
  )
}
