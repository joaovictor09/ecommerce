import Link from 'next/link'

export function EditorsPick() {
  return (
    <section className="flex flex-col gap-12 py-20">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold">EDITOR’S PICK</h3>
        <span className="text-muted-foreground">
          Problems trying to resolve the conflict between{' '}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <Link
          href={'/'}
          className="relative flex min-h-[500px] items-center justify-center rounded bg-zinc-500 bg-[url('/editors-pick-1.png')] bg-cover bg-center lg:col-span-2"
        >
          <div className="absolute bottom-0 left-0 m-4 rounded bg-white px-8 py-3 font-bold">
            MEN
          </div>
        </Link>

        <Link
          href={'/'}
          className="relative flex min-h-[500px] items-center justify-center rounded bg-zinc-500 bg-[url('/editors-pick-2.png')] bg-cover bg-center"
        >
          <div className="absolute bottom-0 left-0 m-4 rounded bg-white px-8 py-3 font-bold">
            WOMEN
          </div>
        </Link>

        <div className="flex min-h-[500px] w-full flex-col items-center justify-center gap-10 md:col-span-2 md:flex-row lg:col-span-1 lg:flex-col">
          <Link
            href={'/'}
            className="relative flex h-full w-full items-center justify-center rounded bg-zinc-500 bg-[url('/editors-pick-3.png')] bg-cover bg-center"
          >
            <div className="absolute bottom-0 left-0 m-4 rounded bg-white px-8 py-3 font-bold">
              ACCESSORIES
            </div>
          </Link>

          <Link
            href={'/'}
            className="relative flex h-full w-full items-center justify-center rounded bg-zinc-500 bg-[url('/editors-pick-4.png')] bg-cover bg-center"
          >
            <div className="absolute bottom-0 left-0 m-4 rounded bg-white px-8 py-3 font-bold">
              KIDS
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
