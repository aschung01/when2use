import Button from '@mui/material/Button';
import { styled } from '@mui/system';

interface ButtonStyleProps {
    backgroundColor?: string;
    borderRadius?: string;
    color?: string;
    onClick: (e: any) => void;
    width?: string,
    height?: string;
    fontSize?: string;
    fontWeight?: string;
    children?: any;
    className?: string;
    key?: any;
    position?: any;
    right?: string;
    disableRipple?: boolean;
    sx?: any;
}

export function ElevatedButton(props: ButtonStyleProps) {
    const BootstrapButton = styled(Button)({
        transition: '300ms',
        position: props.position,
        right: props.right,
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: props.fontSize ?? '14px',
        fontWeight: props.fontWeight ?? 'normal',
        padding: '6px 12px',
        width: props.width ?? '80px',
        height: props.height,
        color: props.color ?? 'white',
        backgroundColor: props.backgroundColor ?? 'black',
        borderRadius: props.borderRadius ?? '10px',
        '&:hover': {
          backgroundColor: props.backgroundColor ?? '#3c3c3c',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: props.backgroundColor ?? '#3c3c3c',
        },
        '&:focus': {
        },
      });

    return <BootstrapButton disableRipple={props.disableRipple} className={props.className} variant="contained" disableElevation onClick={props.onClick} sx={props.sx}>{props.children}</BootstrapButton>
}

export function TextButton(props: ButtonStyleProps) {
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 'normal',
        padding: '6px 12px',
        width: props.width ?? '80px',
        height: props.height,
        color: props.color ?? 'black',
        backgroundColor: props.backgroundColor ?? 'transparent',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: props.backgroundColor ?? '#e5e5e5',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: props.backgroundColor ?? '#e5e5e5',
        },
        '&:focus': {
        },
      });

    return <BootstrapButton className={props.className} variant="contained" disableElevation onClick={props.onClick}>{props.children}</BootstrapButton>
}
