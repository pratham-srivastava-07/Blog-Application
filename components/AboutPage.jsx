import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8 lg:h-screen sm:h-auto md:h-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <Image
                        src="/sun.png"
                        alt="Profile Picture"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">About Our Blog</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Welcome to our blog! We are a team of passionate writers who love to share our thoughts, ideas, and
                        experiences with the world. Our goal is to provide valuable content that inspires, educates, and
                        entertains our readers.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        Our blog covers a wide range of topics including technology, travel, food, lifestyle, and more. We
                        believe in the power of storytelling and strive to create engaging and informative articles that
                        resonate with our audience.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        Thank you for visiting our blog. We hope you enjoy reading our articles as much as we enjoy writing
                        them. Feel free to reach out to us with any feedback, suggestions, or just to say hello!
                    </p>
                </div>
            </div>
        </div>
    );
}
