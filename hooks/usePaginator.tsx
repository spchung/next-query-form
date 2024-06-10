import { useState } from "react"
export const usePaginator = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const onPageChange = (page: number) => {
    if(page < 1 || page > totalPages) return;
    setCurrentPage(page)
  }
  return {
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    onPageChange,
  }
}