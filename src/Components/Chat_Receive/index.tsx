export function ChatReceive({
  username,
  textmessage,
}: {
  username: string
  textmessage: string
}) {
  return (
    <div className="flex">
      <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs felx flex-col">
        <div>{textmessage}</div>
        <div>
          {' '}
          <span className="text-xs text-gray-500">{username}</span>
        </div>
      </div>
    </div>
  )
}
