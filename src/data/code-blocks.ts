export const myCode = [
	{
		code: `export function Content({ content }: PostContentProps) {
  return (
    <div className='py-8 px-14 flex justify-center mb-10'>
      <div className='flex flex-col flex-1 gap-10'>
        <SyntaxHighlighter
          style={atomDark as any}
          language={'tsx'}
          PreTag='div'
          showLineNumbers
        >
          {myCode[0].code.toString()}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}`,
		id: crypto.randomUUID(),
	},

	{
		code: `export function Content({ content }: PostContentProps) {
	return (
		<div className='py-8 px-14 flex justify-center mb-10'>
			<div className='flex flex-col flex-1 gap-10'>
				<SyntaxHighlighter
					style={atomDark as any}
					language={'tsx'}
					PreTag='div'
					showLineNumbers
				>
					{myCode[0].code.toString()}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}`,
		id: crypto.randomUUID(),
	},

	{
		code: `import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}`,
		id: crypto.randomUUID(),
	},
]
