'use client'

import { myCode } from '@/data/code-blocks'
import { CodeBlock } from './code-block'

export default function Post() {
	return (
		<main className='bg-zinc-950 text-zinc-100 p-5 items-center justify-center min-h-screen flex flex-col'>
			{myCode.map((item) => {
				return (
					<CodeBlock
						key={item.id}
						code={item.code}
						language='tsx'
					/>
				)
			})}
		</main>
	)
}
