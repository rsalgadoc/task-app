    'use client'
    
    import { useEffect } from 'react';
    import { signOut } from 'next-auth/react';

    const Component = () => {
      useEffect(() => {
        const handleSignOut = async () => {
          await signOut();
        };

        // Call handleSignOut only when needed, e.g., on a button click
        // handleSignOut();
      }, []);

      return (
        <button onClick={async () => {await signOut()}}>
          Sign Out
        </button>
      );
    };

    export default Component;