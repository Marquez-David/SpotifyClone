import localFont from 'next/font/local'

export const fontStyle = localFont({
  src: [
    {
      path: './CircularStd-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './CircularStd-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './CircularStd-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
})