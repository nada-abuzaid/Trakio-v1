import { Button } from '@mui/material';

interface ButtonProps {
    onClick: () => void;
    label: string;
  }

const CustomButton = ({ onClick, label }: ButtonProps) => (
  <Button variant="contained" onClick={onClick}>
    {label}
  </Button>
);

export default CustomButton;
