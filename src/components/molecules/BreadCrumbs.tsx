import {
  BreadcrumbContainer,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/breadcrumb";
import { FC, Fragment, ReactNode } from "react";

interface ItemsProps {
  path: string;
  label: string;
}

interface Props {
  separator?: ReactNode;
  items?: Array<ItemsProps>;
  children?: ReactNode;
}

interface BreadCrumbCompound extends FC<Props> {
  Items: typeof BreadcrumbItem;
  Link: typeof BreadcrumbLink;
  Separator: typeof BreadcrumbSeparator;
  Ellipsis: typeof BreadcrumbEllipsis;
  Page: typeof BreadcrumbPage;
}

const BreadCrumbs: BreadCrumbCompound = ({ separator, items, children }) => {
  const renderItems = items?.map((item, index) => (
    <Fragment key={item.label}>
      <BreadcrumbItem>
        <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
      </BreadcrumbItem>

      {index < items.length - 1 && separator && (
        <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
      )}
    </Fragment>
  ));
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>{renderItems ? renderItems : children}</BreadcrumbList>
    </BreadcrumbContainer>
  );
};

export default BreadCrumbs;

BreadCrumbs.Items = BreadcrumbItem;
BreadCrumbs.Link = BreadcrumbLink;
BreadCrumbs.Separator = BreadcrumbSeparator;
BreadCrumbs.Ellipsis = BreadcrumbEllipsis;
BreadCrumbs.Page = BreadcrumbPage;
