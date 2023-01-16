import Image from 'next/image'

const NothingToDoHere = () => {
  return (
    <div className="relative max-w-md mx-auto">
      <Image
        priority
        src="/img/search.png"
        alt="No data available"
        height="500"
        width="500"
      />
    </div>
  )
}

export default NothingToDoHere
