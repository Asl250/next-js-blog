import {Button} from '@/components/ui/button'
import {CalendarDays, Clock, Facebook, Link2, Linkedin, Minus, Send, Twitter,} from 'lucide-react'
import Image from 'next/image'
import React from "react";
import parse from 'html-react-parser';
import {content} from "@/constants";


function SlugPage({params}: { params: { slug: string } }) {
	return (
		<div className='pt-[15vh] max-w-5xl mx-auto'>
			<h1 className='lg:text-6xl md:text-5xl text-4xl font-creteRound'>
				The AGI hype train is running out of steam
			</h1>
			
			<div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
				<div className='flex items-center gap-2'>
					<Image
						src={'/author/itadori.jpg'}
						alt='author'
						width={30}
						height={30}
						className='object-cover rounded-sm'
					/>
					<p>by Devus</p>
				</div>
				<Minus/>
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5'/>
					<p>01 min read</p>
				</div>
				<Minus/>
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5'/>
					<p>Dec 5, 2021</p>
				</div>
			</div>
			
			<Image
				src={'/blogs/02.jpg'}
				alt='alt'
				width={`1120`}
				height={`595`}
				className='mt-4 rounded-md'
			/>
			
			<div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground'>Share</p>
						<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
							<Button size={'icon'} variant={'outline'}>
								<Twitter/>
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Facebook/>
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Linkedin/>
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Send/>
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Link2/>
							</Button>
						</div>
					</div>
				</div>
				<div className={'flex-1 prose dark:prose-invert'}>{parse(content)}</div>
			</div>
		</div>
	)
}

export default SlugPage
