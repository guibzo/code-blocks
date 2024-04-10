'use client'

import { Languages } from '@/@types/available-languages'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
	code: string
	language: Languages
}

export function CodeBlock({ code, language }: CodeBlockProps) {
	return (
		<div className='py-8 px-14 flex justify-center mb-10'>
			<div className='flex flex-col flex-1 gap-10'>
				<SyntaxHighlighter
					style={atomDark as any}
					language={language}
					PreTag='div'
					showLineNumbers
				>
					{code}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}
