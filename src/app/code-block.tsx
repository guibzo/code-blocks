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
		<div className='py-4 px-14 flex justify-center'>
			<div className='flex flex-col flex-1 gap-5'>
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
