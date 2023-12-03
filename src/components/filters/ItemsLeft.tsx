interface Props{
  total: number
}

export function ItemsLeft({total}:Props) {
  return (
    <p className="text-gray-400 text-sm">
        {total} Items Left
    </p>
  )
}

