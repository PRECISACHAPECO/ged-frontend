import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'

const DialogActs = ({ title, setOpenModal, open, children }) => {
    return (
        <>
            <Dialog open={open} onClose={() => setOpenModal(false)} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
                {children}
            </Dialog>
        </>
    )
}

export default DialogActs
