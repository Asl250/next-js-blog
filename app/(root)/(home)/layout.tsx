import Footer from '@/app/(root)/_components/footer'
import Navbar from '@/app/(root)/_components/navbar'

import {ChildProps} from '@/types'
import { ThemeProvider } from 'next-themes'

function Layout({children}: ChildProps) {
	return (
			<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange>
				<Navbar/>
				<div className="conteiner">{children}</div>
				<Footer/>
		</ThemeProvider>

	
)
}


export default Layout
