import { EditorsPick } from './components/editors-pick'
import { BestSellerProducts } from './components/best-sellers-products'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-10">
      <div className="flex w-full max-w-5xl flex-col">
        <EditorsPick />
        <BestSellerProducts />
      </div>
    </div>
  )
}
