import { SignedIn, SignedOut, SignInButton, SignOutButton, UserAvatar } from '@clerk/clerk-react'

function App() {

    return (
        <>
            <h1>my application</h1>
            <SignedOut>
                <SignInButton mode='modal'/>
            </SignedOut>

            <SignedIn>
                <SignOutButton/>
            </SignedIn>
            
            <UserAvatar/>
        </>
    )
}

export default App
