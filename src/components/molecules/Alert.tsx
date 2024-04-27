import {
  AlertContainer,
  AlertDescription,
  AlertTitle,
} from "@/components/atoms/alert";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { FC, ReactNode } from "react";
import { AlertDialog } from "../atoms/alert-dialog";

interface Props extends AlertDialogProps {
  children: ReactNode;
}

interface AlertCompound extends FC<Props> {
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
}

const Alert: AlertCompound = ({ children, ...props }) => {
  return <AlertContainer {...props}>{children}</AlertContainer>;
};

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export default Alert;
