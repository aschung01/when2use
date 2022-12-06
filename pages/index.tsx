import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react';
import { ElevatedButton } from '../components/buttons';
import { TextInputField } from '../components/InputField';
import keyReturn from '../icons/KeyReturn.svg'

export default function Home() {
  const router = useRouter();
  const [groupName, setGroupName] = React.useState('');
  
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(groupName);
    router.push(`/group/${groupName}`, );
  }
  
  const onGoClick = (e: React.FormEvent<HTMLButtonElement>) => {
   e.preventDefault(); 
  }

  return (
    <div>
      <Head>
        <title>when2use</title>
        <meta name="description" content="when2use" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TextInputField onSubmit={onSubmit} onInputChange={onInputChange} placeholder='Enter new group name to start' />
        <p>or</p>
        <form className='existing-group' onSubmit={(e) => {
          e.preventDefault()
        }}>
          <input className='paste' placeholder='Paste your group link here'/>
          <ElevatedButton onClick={onGoClick} width="100px" height="56px" borderRadius='30px' fontSize="20px" position="absolute" right="6px" >
            Go
          </ElevatedButton>
        </form>
      </main>

      <style jsx>{`
        main {
          min-height: 100vh;
          max-height: max-content;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        input, input:focus{
          border: none;
          outline: none;
          width: 600px;
          height: 50px;
          font-size: 32px;
          font-weight: 500;
          text-align: center;
          background-color: white;
          color: black;
        }
        p, input::placeholder {
          color: #808080;
        }

        p, .paste, .paste:focus {
          font-size: 24px;
          font-weight: normal;
        }

        p {
          margin: 80px 0;
        }

        .paste {
          flex-grow:2;
        }

        .existing-group {
          display:flex;
          border:1px solid #e5e5e5;
          border-radius: 50px;
          width: 700px;
          height: 68px;
          align-items: center;
          position: relative;
        }

      `}</style>
    </div>
  )
}
