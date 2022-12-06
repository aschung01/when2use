import { useRouter } from "next/router"
import { lexend } from "../../fonts/lexend";
import { Plus, CopySimple } from "phosphor-react";
import React from "react";
import AddShareableDialog from "../../components/dialog";
import { ElevatedButton } from "../../components/buttons";
import { GroupProvider, useGroupContext } from "../../context/GroupContext";
import dayjs from "dayjs";
import { borderRadius } from "@mui/system";
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import Schedule from "../../components/Schedule";
import { MouseProvider } from "../../context/MouseContext";

export default function Group() {
    const router = useRouter();
    const {groupName} = router.query;
    const shareablesList: string[] = ['Bathroom', 'Computer'];
    const [newShareableOpen, setNewShareableOpen] = React.useState(false);
    const [selectedShareable, setSelectedShareable] = React.useState('');
    let {dialogPage, setDialogPage} = useGroupContext();
    const { enqueueSnackbar } = useSnackbar();

    const handleClose = () => {
      setNewShareableOpen(false);
    };

    const onNewShareableClick = (e: React.FormEvent<HTMLButtonElement>) => {
        setDialogPage(0);
        setNewShareableOpen(true);
    }

    const handleShareableClick = (e: React.FormEvent<HTMLButtonElement>, shareable: string) => {
        setSelectedShareable(shareable);
    }

    const showSnackbar = (text: string, variant: VariantType) => {
        enqueueSnackbar(text, { variant });
    }

    const handleCopyLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(window.location.href);
        showSnackbar("Successfully copied!", 'success');
    }

    return <div>
        <main>
            <div className="sidebar">
                <h1>{groupName}</h1>
                <h2>Your group&apos;s shareables</h2>
                <ElevatedButton className="add-new" onClick={onNewShareableClick} width="160px" height="40px" sx={{
                    margin: "0 auto",
                }}>
                    <Plus />
                    <p style={{marginLeft:'4px'}}>
                        Add new
                    </p>
                </ElevatedButton>
                {shareablesList.map(shareable => {
                    let isSelected = shareable === selectedShareable;
                   return <ElevatedButton key={shareable} disableRipple={isSelected ? true : false} fontWeight={isSelected ? "bold" : "normal"} onClick={(e) => handleShareableClick(e, shareable)} backgroundColor="#f5f5f5" 
                   height="40px" color="black" sx={{
                        width: isSelected ? "190px" : "160px",
                        marginTop: "16px",
                        marginLeft: "auto",
                        marginRight: isSelected ? "0" : "auto",
                        "&:hover": !isSelected ? {backgroundColor: "#dddddd"} : {},
                        position: "relative",
                        borderRadius: isSelected ? "10px 0 0 10px" : "10px",
                        "&::after": isSelected ? {
                            content: '""',
                            position: "absolute",
                            backgroundColor: "transparent",
                            boxShadow: "0 -10px 0 0 #f5f5f5",
                            bottom: "-20px",
                            right: "0px",
                            height: "20px",
                            width: "10px",
                            borderTopRightRadius: "10px",
                        } : {},
                        "&::before": isSelected ? {
                            content: '""',
                            position: "absolute",
                            backgroundColor: "transparent",
                            boxShadow: "0 10px 0 0 #f5f5f5",
                            top: "-20px",
                            right: "0px",
                            height: "20px",
                            width: "10px",
                            borderBottomRightRadius: "10px",
                        } : {},
                    }}>{shareable}</ElevatedButton>
                }
                )}
            </div>
            <div className="container" style={{justifyContent: selectedShareable === '' ? 'center' : 'start'}}>
                {
                    selectedShareable === '' ?
                    <p className="placeholder">Which shareable do you wish to use?<br/>Select from left sidebar</p> :
                    <>
                    <div className="top">
                        <h2>{dayjs().format('MMMM, YYYY')}</h2>
                        <ElevatedButton onClick={handleCopyLinkClick} sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            width: '240px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'start',
                            padding: '8px',
                            '&:hover': {
                                backgroundColor: '#e5e5e5',
                            }
                        }}>
                            <div style={{
                                backgroundColor: "#f5f5f5",
                                borderRadius: "10px",
                                width: "32px",
                                height: "32px",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                marginLeft: '0px',
                                marginRight: "12px",
                            }}><CopySimple/></div>
                            Copy your group&apos;s link
                            </ElevatedButton>
                    </div>
                    <MouseProvider>
                    <Schedule />
                    </MouseProvider>
                    </>
                }
            </div>
            <AddShareableDialog open={newShareableOpen} handleClose={handleClose} />

        </main>
        <style jsx>{`
            main{
                display: flex;
            }

            .sidebar {
                width: 220px;
                min-height: calc(100vh - 60px);
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: start;
                padding: 24px 0px;
            }

            h1 {
                font-size: 32px;
                font-family: ${lexend.style.fontFamily};
                font-weight: 500;
                margin: 0 20px;
            }

            h2 {
                margin: 16px 20px 20px;
                font-size: 16px;
                font-weight: normal;
            }

            .container {
                min-height: calc(100vh - 60px);
                background-color: #f5f5f5;
                flex: 3;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 12px 40px;
            }

            .container .placeholder {
                font-size: 20px;
                text-align: center;
                color: #808080;
            }

            .container .top {
                display: flex;
                flex-direction: row;
                align-items: end;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 12px;
            }

            .container .top h2 {
                font-size: 24px;
                padding: 0;
                margin: 0;
            }
        `}</style>
    </div>
}