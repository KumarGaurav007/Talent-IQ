import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import toast from "react-hot-toast"


function HomePage() {
    return (
        <div className='bg-zinc-700'>
            <button className='btn btn-primary'
                onClick={() => toast.success("ha laure button dabaya tune 😂")}
            > button</button>
            <h1 className='bg-zinc-700 text-2xl text-amber-500'>my application</h1>
            <SignedOut>
                <SignInButton mode='modal'/>
            </SignedOut>

            <SignedIn>
                <SignOutButton/>
            </SignedIn>
            
            <UserButton/>
        </div>
    )
}

export default HomePage