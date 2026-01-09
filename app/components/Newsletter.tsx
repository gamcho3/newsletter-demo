
import Link from "next/link";

export default function Newsletter() {
    return (
        <section className="bg-gray-50 rounded-2xl p-8 my-12 text-center">
            <h2 className="text-2xl font-bold mb-4">📬 메일링 리스트 구독하기</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
                새로운 글과 업데이트를 가장 먼저 받아보세요.
                이메일 주소를 입력하고 간편하게 구독할 수 있습니다.
            </p>
            <Link
                href="https://page.stibee.com/subscriptions/465280"
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
            >
                구독하기
            </Link>
        </section>
    );
}
