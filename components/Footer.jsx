import Link from 'next/link'
export default function Footer() {
    return (
        <footer  className="w-full p-4 border-t border-gray-200 lg:mt-3 md:mt-3 sm:mt-3 md:flex md:items-center md:justify-between md:p-6 bg-black dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li><Link href="/about" className="hover:underline me-4 md:me-6">About</Link></li>
                <li><Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
        </footer>
    );
}