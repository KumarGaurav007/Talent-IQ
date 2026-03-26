import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {

    return (
        <div >
            <h1>my application</h1>
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

export default App
