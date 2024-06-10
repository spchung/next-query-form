import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type PaginatorProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Paginator = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginatorProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            // href="#"
            onClick={() => onPageChange(currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            // href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage + 1)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};