import Image from 'next/image'
import Link from 'next/link'

export function ProductCard() {
  return (
    <Link
      href={'/'}
      className="flex w-full flex-col items-center justify-center gap-5 overflow-hidden rounded pb-5 hover:shadow"
    >
      <Image
        src={'/editors-pick-1.png'}
        height={427}
        width={348}
        alt="Product"
      />

      <div className="flex flex-col items-center gap-2">
        <h4 className="font-bold">Graphic Design</h4>
        <span className="font-bold text-muted-foreground">
          English Department
        </span>
        <div className="flex gap-2">
          <span className="text-muted-foreground line-through">$16.48</span>
          <strong>$6.48</strong>
        </div>
      </div>
    </Link>
  )
}
