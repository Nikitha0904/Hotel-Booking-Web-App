'use client'
import { UserButton, useAuth } from '@clerk/nextjs'
import Container from '../container'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import SearchInput from '../SearchInput'

const NavBar = () => {
    const router = useRouter()
    const {userId} = useAuth()
    return (
        <div className='sticky top-0 border border-b-primary/10 bg-secondary'>
            

            
            <Container>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 cursor-pointer' onClick={() => router.push('/')}>
                    <Image src='/logo.png' alt ="logo" width={30} height={30}/>
                    <div className='font-bold text-xl'>
                        StayFinder
                    </div>
                    
                </div>
                <SearchInput/>
                <div className='flex gap-3 items-center '>
                        <div>Theme</div>
                        <UserButton afterSignOutUrl='/' />
                        {!userId && <>
                        
                        <Button variant='outline' size='sm' onClick={() => router.push('/sign-in')}>Sign in</Button>
                        <Button size={'sm'} onClick={() => router.push('/sign-up')}>Sign up</Button>

                        </>}
                    </div>
                    </div>
            </Container>
        </div>
    )
}

export default NavBar
