import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from "@/components/buttons";
// here we import css modules
// import styles from './NavMenu.module.css';

export default function NavMenu() {
    return (
        <nav>
            <Link href={'/'}>  {/* Link replaces <a> tags... Image replaces img tags */}
                <Image          
                    src="/favicon.ico"
                    width={30}
                    height={30}
                    alt={'Some Logo'}
                />
            </Link>
            <ul>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
                <li>
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    )
}