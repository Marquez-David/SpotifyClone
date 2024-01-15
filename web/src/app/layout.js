import { fontStyle } from '@/assets/fonts/LocalFonts'
import { metadataStrings } from '@/utils/strings'

export const metadata = {
  title: metadataStrings.title,
  description: metadataStrings.description,
  icons: { icon: metadataStrings.icon }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontStyle.className}>
      {children}
    </html>
  )
}
