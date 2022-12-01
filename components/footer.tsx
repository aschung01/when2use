import Image from 'next/image'
import yellowButton from '../images/yellow-button.png'
import purpleButton from '../images/purple-button.png'

export default function Footer(){
   return <footer>
          <p>
            Inspired by when2meet, made with 👨🏻‍💻 by <a href="https://github.com/aschung01" target="_blank">@aschung01</a>
          </p>
          <a className="button" href="https://www.buymeacoffee.com/sounhochung" target="_blank">
            <Image src={yellowButton} alt="buy-me-a-coffee" width={142} height={40}></Image>
          </a>
          <style jsx>{`
            footer{
                display: flex;
                flex: 1;
                padding: 1.5rem 0;
                border-top: 1px solid #d0d0d0;
                justify-content: center;
                align-items: center;
            }
            a {
                font-weight: bold;
            }
            .button {
                margin-left: 20px;
            }

        `}</style>
      </footer>
}