import { signup } from '../auth/actions'

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <form className="flex flex-col gap-4 p-8 border rounded-lg shadow-md w-80">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>

                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required className="border p-2 rounded" />

                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required className="border p-2 rounded" />

                <button formAction={signup} className="bg-green-500 hover:bg-green-600 text-white p-2 rounded">Sign up</button>
            </form>
        </div>
    )
}
