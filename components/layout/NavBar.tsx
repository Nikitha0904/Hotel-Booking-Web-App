'use client'
import { UserButton, useAuth } from '@clerk/nextjs'
import Container from '../container'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import SearchInput from '../SearchInput'
import { ModeToggle } from '../themetoggle'
import { NavMenu } from './NavMenu'

const NavBar = () => {
    const router = useRouter()
    const { userId } = useAuth()

    return (
        <div className='sticky top-0 z-50 border-b border-b-primary/10 bg-secondary h-16'>
            <Container>
                <div className='flex justify-between items-center h-full'>
                    <div className='flex items-center gap-1 cursor-pointer' onClick={() => router.push('/')}>
                        <Image src='/logo.png' alt="logo" width={30} height={30} />
                        <div className='font-bold text-xl'>
                            StayFinder
                        </div>
                    </div>
                    <SearchInput />
                    <div className='flex gap-3 items-center'>
                        <ModeToggle />
                        <NavMenu />
                        <UserButton afterSignOutUrl='/' />
                        {!userId && (
                            <>
                                <Button variant='outline' size='sm' onClick={() => router.push('/sign-in')}>
                                    Sign in
                                </Button>
                                <Button size='sm' onClick={() => router.push('/sign-up')}>
                                    Sign up
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NavBar
