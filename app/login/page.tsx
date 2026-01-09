import { login, signup } from '../auth/actions'

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <form className="flex flex-col gap-4 p-8 border rounded-lg shadow-md w-80">
                <h1 className="text-2xl font-bold text-center">Login</h1>

                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required className="border p-2 rounded" />

                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required className="border p-2 rounded" />

                <button formAction={login} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Log in</button>
                <button formAction={signup} className="border hover:bg-gray-50 p-2 rounded">Sign up</button>
            </form>
        </div>
    )
}
