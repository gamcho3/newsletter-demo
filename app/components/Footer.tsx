
export default function Footer() {
    return (
        <footer className="border-t py-8 mt-12 bg-white">
            <div className="max-w-3xl mx-auto px-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} 데모 뉴스레터. All rights reserved.</p>
                <div className="mt-4 flex justify-center gap-4">
                    <span className="hover:text-gray-800 cursor-pointer">이용약관</span>
                    <span className="hover:text-gray-800 cursor-pointer">개인정보처리방침</span>
                </div>
            </div>
        </footer>
    );
}
