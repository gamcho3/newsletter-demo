import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { signOut } from '../auth/actions'

export default async function Header() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
        <header className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="text-xl font-bold">
                Home
            </Link>
            <div className="flex gap-4 items-center">
                {user ? (
                    <div className="flex items-center gap-4">
                        <span className="text-sm">{user.email}</span>
                        <form action={signOut}>
                            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm">
                                Sign Out
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded text-sm hover:bg-gray-100"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}
