import SideNavBar from '@/components/NavBars/SideNavBar'
import ContentNavBar from '@/components/NavBars/ContentNavBar'

import { fontStyle } from '@/assets/fonts/LocalFonts'
import { metadataStrings } from '@/utils/strings'
import './globals.css'

export const metadata = {
  title: metadataStrings.title,
  description: metadataStrings.description,
  icons: { icon: metadataStrings.icon }
}

const RootLayout = ({ children }) => (
  <html lang="en" className={fontStyle.className}>
    <body>
      <div id="app" className="relative h-screen p-2 gap-2">

        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
          <SideNavBar />
          <ContentNavBar />
        </aside>



        <main className="[grid-area:main] overflow-y-hidden rounded-lg bg-background-base">
          {children}
        </main>

        <footer className="[grid-area:player] bg-background-base rounded-lg h-[80px]">
        </footer>

      </div>
    </body>
  </html>
)

export default RootLayout
