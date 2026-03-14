import { SignedIn, SignedOut, SignInButton, SignOutButton, UserAvatar, UserProfile } from '@clerk/clerk-react'

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
            
            <UserProfile/>
        </>
    )
}

export default App
