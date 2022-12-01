import Link from "next/link";
import { useRouter } from "next/router";
import { lexend } from "../fonts/lexend";

export default function NavBar() {
    const router = useRouter();

    return <nav>
            <Link href="/">
                <h1>when2use</h1>
            </Link>
            <Link href="/about">
                <h2 className={router.pathname === '/about' ? 'active' : ''}>About</h2>
            </Link>
            <Link href="/guide">
                <h2 className={router.pathname === '/guide' ? 'active' : ''}>User Guide</h2>
            </Link>
            <style jsx>{`
                nav {
                    background-color: rgba(255, 255, 255, 0.5);
                    height: 60px;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #d0d0d0;
                    backdrop-filter: blur(8px);
                }
                h1, h2{
                    display: inline-block;
                    margin: auto 20px;
                    padding: 16px 0px;
                    color: black;
                    font-weight: 400;
                    font-family: ${lexend.style.fontFamily};
                    font-size: 18px;
                }
                h1 {
                    font-weight: 400;
                    font-size: 24px;
                }
                h2 {
                    opacity: 0.6;
                    position: relative;

                }
                h2:hover {
                    opacity: 1;
                }
                h2::before {
                    transition: 300ms;
                    height: 2px;
                    content: "";
                    position: absolute;
                    background-color: black;
                    width: 0%;
                    bottom: 10px;
                }
                h2:hover::before{
                    width: 100%;
                }
                .active {
                    opacity: 1;
                }
            `}</style>
        </nav>
   
}