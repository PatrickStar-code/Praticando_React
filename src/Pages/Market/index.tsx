import Cart from '../../Components/Cart'

export function Market() {
  const link = document.querySelector<HTMLLinkElement>(
    "link[rel='shortcut icon']",
  )
  const pageName = document.querySelector<HTMLTitleElement>('title')

  if (link && pageName) {
    link.href = 'src/Assets/lojas.png'
    pageName.innerHTML = 'Market'
  }

  return (
    <main className="flex ">
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start "></div>
      </section>
      <Cart />
    </main>
  )
}
