import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'lotea.org - 물류테트리스협회',
  description: '물류테트리스협회와 함께 물류산업의 미래를 만들어갑니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
