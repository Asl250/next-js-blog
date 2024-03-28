import Footer from '@/app/(root)/_components/footer'
import Navbar from '@/app/(root)/_components/navbar'

import {ChildProps} from '@/types'
import { ThemeProvider } from 'next-themes'

function Layout({children}: ChildProps) {
	return (
		<>
			<Navbar/>
			<div className="conteiner">{children}</div>
			<Footer/>
		</>


	
)
}


export default Layout
