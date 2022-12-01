import { useRouter } from "next/router"
import { lexend } from "../../fonts/lexend";
import { Plus } from "phosphor-react";
import React from "react";
import CustomizedDialog from "../../components/dialog";
import { ElevatedButton } from "../../components/buttons";

export default function Group() {
    const router = useRouter();
    const {groupName} = router.query;
    const shareablesList: string[] = [];
    const [newShareableOpen, setNewShareableOpen] = React.useState(false);

    const handleClose = () => {
      setNewShareableOpen(false);
    };

    const onNewShareableClick = (e: React.FormEvent<HTMLButtonElement>) => {
      setNewShareableOpen(true);
    }

    return <div>
        <main>
            <div className="sidebar">
                <h1>{groupName}</h1>
                <h2>Your group&apos;s shareables</h2>
                {shareablesList.map(shareable => (
                    <ElevatedButton onClick={() => {}} key={shareable} backgroundColor="#f5f5f5" width="160px" height="40px"/>
                )
                )}
                <ElevatedButton className="add-new" onClick={onNewShareableClick} width="160px" height="40px">
                    <Plus />
                    <p style={{marginLeft:'4px'}}>
                        Add new
                    </p>
                </ElevatedButton>
                {/* <button className="add-new" onClick={onNewShareableClick}><Plus /> <p>Add new</p></button> */}
            </div>
            <div className="container">
                <p>Which shareable do you wish to use?<br/>Select from left sidebar</p>
            </div>
            <CustomizedDialog open={newShareableOpen} handleClose={handleClose} />

        </main>
        <style jsx>{`
            main{
                display: flex;
            }

            .sidebar {
                max-width: 280px;
                min-height: calc(100vh - 60px);
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: start;
                padding: 24px 20px;
            }

            h1 {
                font-size: 32px;
                font-family: ${lexend.style.fontFamily};
                font-weight: 500;
                margin: 0px;
            }

            h2 {
                margin: 16px 0px 20px;
                font-size: 16px;
                font-weight: normal;
            }

            .container {
                min-height: calc(100vh - 60px);
                background-color: #f5f5f5;
                flex: 3;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .container p {
                font-size: 20px;
                text-align: center;
                color: #808080;
            }
        `}</style>
    </div>
}